export const EXAMPLE_PATH = 'blog-starter';
export const CMS_NAME = 'Markdown';
export const HOME_OG_IMAGE_URL =
  'https://og-image.now.sh/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg';

export const FULL_PAGE_LIST = ['/posts/[slug]'];

export const CSR = process.browser;

// AlgoliaSearch secret
export const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_ID;
export const algoliaClientKey = process.env.NEXT_PUBLIC_ALGOLIA_CLIENT_KEY;
export const algoliaServerKey = process.env.ALGOLIA_SERVER_KEY;

// LeanCloud secret
export const leanCloudAppId = process.env.LEANCLOUD_ID;
export const leanCloudAppKey = process.env.LEANCLOUD_KEY;
