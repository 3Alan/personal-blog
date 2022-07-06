/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const { join } = require('path');
const matter = require('gray-matter');

const appId = process.env.NEXT_PUBLIC_ALGOLIA_ID;
const serverKey = process.env.ALGOLIA_SERVER_KEY;

function getRealPath(path) {
  return join(process.cwd(), path);
}

const postsDirectory = getRealPath('_posts');

function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

function getPostBySlug(slug, fields = []) {
  const defaultExtension = '.mdx';
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = join(postsDirectory, `${realSlug}${defaultExtension}`);
  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    fileContents = fs.readFileSync(join(postsDirectory, `${realSlug}.md`), 'utf8');
  }

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

const records = getAllPosts(['title', 'content', 'slug', 'tags']);

const algoliasearch = require('algoliasearch');

const client = algoliasearch(appId, serverKey);
const index = client.initIndex('posts');

index
  .replaceAllObjects(records, { autoGenerateObjectIDIfNotExist: true })
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
