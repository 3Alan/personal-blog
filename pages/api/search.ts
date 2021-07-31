import Fuse from 'fuse.js';
import fs from 'fs';
import { join } from 'path';

export default async (req, res) => {
  const { key } = req.query;
  const postsDirectory = join(process.cwd(), 'cache');
  console.log(postsDirectory);

  const fullPath = join(postsDirectory, 'data.js');
  const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  console.log(fileContents);

  const options = {
    includeScore: true,
    includeMatches: true,
    ignoreLocation: true,
    minMatchCharLength: 2,
    keys: ['content', 'tags', 'title']
  };

  const fuse = new Fuse(fileContents, options);

  const result = fuse.search(key).map(({ item }) => item);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ result }));
};
