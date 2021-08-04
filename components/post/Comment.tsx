import { useEffect, FC } from 'react';
import AV from 'leancloud-storage';

const Comment: FC = () => {
  useEffect(() => {
    (async () => {
      // AV.init({
      //     appId,
      //     appKey
      // });
      // const query = new AV.Query('Counter');
      // // https://leancloud.cn/docs/leanstorage_guide-js.html#hash1025913543
      // query.get('5fa8feb8cb5eb5529f9e864c').then((counter) => {
      //     const times = counter.get('times');
      //     console.log(times);
      // });
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
