import { getHighlighter } from 'shiki';
import markdownParse from 'markdown-it';
import Anchor from 'markdown-it-anchor';
import Toc from 'markdown-it-toc-done-right';

export default async function markdownToHtml(markdown: string): Promise<{ content: string; toc: string }> {
  const highlighter = await getHighlighter({
    theme: 'nord'
  });

  let tocContent = '';

  const md = await markdownParse({
    html: true,
    xhtmlOut: true,
    typographer: true,
    linkify: true,
    highlight: (code, lang) => {
      return highlighter.codeToHtml(code, lang);
    }
  })
    .use(Anchor, { permalink: true, permalinkBefore: true, permalinkSymbol: '§' })
    .use(Toc, {
      containerId: 'toc',
      callback: (html) => {
        tocContent = html;
      }
    });

  const html = await md.render(`\${toc}${markdown}`);

  return { content: html.toString(), toc: tocContent };
}
