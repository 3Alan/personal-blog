import { useEffect, FC } from 'react';

const RecentComments: FC = () => {
  useEffect(() => {
    (async () => {
      const Waline = (await import('@waline/client')).default;
      const commentList = await Waline.Widget.RecentComments({
        serverURL: 'https://waline-server-lilac.vercel.app',
        count: 10
      });
      console.log(commentList);
    })();
  }, []);
  return <div id="recent-comments"></div>;
};

export default RecentComments;
