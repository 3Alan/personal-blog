import remark from 'remark';
import html from 'remark-html';
import heighlight from 'remark-highlight.js';

export default async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).use(heighlight).process(markdown);
  return result.toString();
}
