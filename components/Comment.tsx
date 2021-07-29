import { useEffect, FC } from 'react';
import AV from 'leancloud-storage';

// TODO: 密钥通过参数传递，不要明文显示
const Comment: FC = () => {
  console.log(process.env.NEXT_PUBLIC_LEANCLOUD_ID);
  console.log(process.env.NEXT_PUBLIC_LEANCLOUD_KEY);

  useEffect(() => {
    (async () => {
      // AV.init({
      //     appId: 'aowgxqHE7wB4I8HLWqC4c4Ut-MdYXbMMI',
      //     appKey: '37wkY4T3cM7nV2UWV7EIEHPy'
      // });
      // const query = new AV.Query('Counter');
      // // https://leancloud.cn/docs/leanstorage_guide-js.html#hash1025913543
      // query.get('5fa8feb8cb5eb5529f9e864c').then((counter) => {
      //     const times = counter.get('times');
      //     console.log(times);
      // });
      // eslint-disable-next-line global-require
      // const Valine = require('valine');
      const Valine = (await import('valine')).default;

      const comment = new Valine({
        el: '#vcomments',
        appId: 'aowgxqHE7wB4I8HLWqC4c4Ut-MdYXbMMI',
        appKey: '37wkY4T3cM7nV2UWV7EIEHPy',
        visitor: true, // 阅读量统计
        recordIP: true,
        enableQQ: true,
        requiredFields: ['nick'],
        avatarForce: true
        // other config
      });
      console.log(comment);
    })();
  }, []);
  return <div id="vcomments"></div>;
};

export default Comment;
