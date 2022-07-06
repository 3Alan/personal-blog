import '../styles/index.scss';
import { ThemeContextProvider, ThemeContext, UPDATE_THEME } from '../components/ThemeContextProvider';
import { useContext, useEffect } from 'react';
import type { AppProps /* , AppContext */ } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import Card from '../components/post/Card';
import SyntaxHighlighter from 'react-syntax-highlighter';

function ThemeProvider() {
  const { theme, dispatch } = useContext(ThemeContext);

  useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      dispatch({ type: UPDATE_THEME, value: 'dark' });
    } else {
      document.documentElement.classList.remove('dark');
      dispatch({ type: UPDATE_THEME, value: 'light' });
    }
  }, [dispatch]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return null;
}

function code({ className, ...props }) {
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <SyntaxHighlighter language={match[1]} PreTag="div" {...props} />
  ) : (
    <code className={className} {...props} />
  );
}

const components = {
  Card,
  code
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <ThemeContextProvider>
        <ThemeProvider />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </MDXProvider>
  );
}

export default MyApp;
