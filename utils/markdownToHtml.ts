import remark from 'remark';
import html from 'remark-html';
import heighlight from 'remark-highlight.js';
import remarkSlug from 'remark-slug';
import headings from 'remark-autolink-headings';

export default async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkSlug)
    // .use(headings)
    .use(headings, { linkProperties: { 'data-anchor': 'headings' } })
    .use(html)
    .use(heighlight)
    .process(markdown);

  return result.toString();
}
