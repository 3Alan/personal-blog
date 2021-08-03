/* eslint-disable @typescript-eslint/no-var-requires */
import Fuse from 'fuse.js';
import { getAllPosts } from '../../utils/postTool';

const posts =
  process.env.NODE_ENV === 'production'
    ? require('../../cache/data').posts
    : getAllPosts(['title', 'content', 'slug', 'tags']);

export default async (req, res) => {
  const { key } = req.query;

  const options = {
    includeScore: true,
    includeMatches: true,
    ignoreLocation: true,
    minMatchCharLength: 2,
    keys: ['content', 'tags', 'title']
  };

  const fuse = new Fuse(posts, options);

  const result = fuse.search(key).map(({ item }) => item);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ result }));
};
