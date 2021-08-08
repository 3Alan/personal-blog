import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { isArray } from './verify';

const postsDirectory = join(process.cwd(), '_posts');
console.log(process.cwd(), __dirname, 'path--------');

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields = []): any {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, excerpt, content } = matter(fileContents, { excerpt_separator: '<!-- more -->' });

  const items = { excerpt };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []): any[] {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostsByPage(field, page, count) {
  const posts = getAllPosts(field);
  const currentPosts = posts.slice((page - 1) * count, (page - 1) * count + count);
  return currentPosts;
}

export function unique(arr: any[]): any[] {
  const res = new Map();
  return arr.filter((a) => !res.has(a.id) && res.set(a.id, 1));
}

// TODO: 算法待优化
export function getRelatedPosts(tags: any[], slug: string, num = 3): any[] {
  if (!isArray(tags)) return [];
  // filter yourself
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tags']).filter((item) => item.slug !== slug);

  let relatedPosts = [];
  for (let index = 0; index < tags.length; index++) {
    if (relatedPosts.length > num) break;

    const element = tags[index];
    const related = allPosts.filter((item) => {
      if (item.tags) {
        return item.tags.includes(element);
      }
      return false;
    });
    relatedPosts = relatedPosts.concat(related);
  }
  return unique(relatedPosts);
}
