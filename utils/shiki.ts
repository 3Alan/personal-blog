import { getHighlighter } from 'shiki';
import markdownParse from 'markdown-it';
import Anchor from 'markdown-it-anchor';
import Toc from 'markdown-it-toc-done-right';

export default async function markdownToHtmlByShiki(markdown: string): Promise<string> {
  const highlighter = await getHighlighter({
    theme: 'nord'
  });

  console.log(highlighter);

  const md = await markdownParse({
    html: true,
    xhtmlOut: true,
    typographer: true,
    // linkify : true,
    highlight: (code, lang) => {
      return highlighter.codeToHtml(code, lang);
    }
  })
    .use(Anchor, { permalink: true, permalinkBefore: true, permalinkSymbol: '§' })
    .use(Toc);

  console.log(md);

  const html = await md.render(`\${toc}${markdown}`);

  return html.toString();
}
