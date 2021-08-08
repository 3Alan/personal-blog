import { useEffect, FC } from 'react';

const Comment: FC = () => {
  useEffect(() => {
    (async () => {
      // eslint-disable-next-line global-require
      const Waline = (await import('@waline/client')).default;
      Waline({
        el: '#wcomments',
        dark: '.dark',
        // 放到环境变量中？
        serverURL: 'https://waline-server-lilac.vercel.app',
        emoji: [
          'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
          'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus'
        ],
        visitor: true,
        requiredFields: ['nick'],
        avatarForce: true
        // other config
      });
    })();
  }, []);
  return <div id="wcomments"></div>;
};

export default Comment;
