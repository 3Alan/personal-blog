/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { join } = require('path');
const matter = require('gray-matter');

const postsDirectory = join(process.cwd(), '_posts');
console.log(postsDirectory, 'postsDirectory');

function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

function getPostBySlug(slug, fields = []) {
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

function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

const data = JSON.stringify(getAllPosts(['title', 'content', 'slug', 'tags']));

try {
  fs.readdirSync('cache');
} catch (error) {
  fs.mkdirSync('cache');
}

fs.writeFile('cache/data.js', data, (err) => {
  if (err) console.log(err);
  console.log('posts cached');
});
