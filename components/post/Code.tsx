import { FaCopy } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface CodeHeaderProps {
  language: string;
  copyText: string;
}

function CodeHeader({ language, copyText }: CodeHeaderProps) {
  return (
    <div
      style={{ background: '#21252b' }}
      className="text-sm h-8 flex justify-end text-gray-400 px-4 py-1 items-center "
    >
      <span className="pr-2">{language}</span>

      <CopyToClipboard text={copyText}>
        <FaCopy className="cursor-pointer hover:text-gray-200" />
      </CopyToClipboard>
    </div>
  );
}

export default function Code({ className, ...props }) {
  const match = /language-(\w+)/.exec(className || '');

  return match ? (
    <>
      <CodeHeader language={match[1]} copyText={props.children} />
      <SyntaxHighlighter
        style={oneDark}
        language={match[1]}
        PreTag="div"
        customStyle={{ margin: 0, borderRadius: 0 }}
        showLineNumbers
        {...props}
      />
    </>
  ) : (
    <code className={className} {...props} />
  );
}
