import dayjs from 'dayjs';
import { useState, useEffect, FC } from 'react';
import WidgetsContainer from './Container';
import cn from 'classnames';
import Link from 'next/link';

export interface RecentCommentsProps {
  className?: string;
}

export type CommentItemPojo = {
  comment: string;
  nick: string;
  createdAt: string;
  url: string;
};

type CommentItemProps = {
  item: CommentItemPojo;
};

function computeTimeDiff(time) {
  const diffDays = dayjs().diff(dayjs(time), 'days');
  const diff = diffDays ? `${diffDays}天前` : `${dayjs().diff(dayjs(time), 'hours')}小时前`;
  return diff;
}

const CommentItem: FC<CommentItemProps> = ({ item }) => {
  const { comment, nick, createdAt, url } = item;
  return (
    <div className="flex flex-col p-2 border-0 border-b border-dotted">
      <Link href={url}>
        <div
          className="text-sm text-gray-700 ellipsis-2 mb-2 cursor-pointer hover:underline"
          dangerouslySetInnerHTML={{ __html: comment }}
        ></div>
      </Link>

      <div className="text-xs text-gray-500">
        {nick} / {computeTimeDiff(createdAt)}
      </div>
    </div>
  );
};

// TODO: Skelton
const RecentComments: FC<RecentCommentsProps> = ({ className }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      const Waline = (await import('@waline/client')).default;
      const commentList = await Waline.Widget.RecentComments({
        serverURL: 'https://waline-server-lilac.vercel.app',
        count: 5
      });
      setList(commentList.comments);
    })();
  }, []);

  return (
    <WidgetsContainer id="recent-comments" className={className} title="最近评论">
      {list.map((item, index) => (
        <CommentItem item={item} key={index} />
      ))}
    </WidgetsContainer>
  );
};

RecentComments.defaultProps = {
  className: ''
};

export default RecentComments;
