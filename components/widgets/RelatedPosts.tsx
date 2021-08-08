import { FC } from 'react';
import WidgetsContainer from './Container';
import Link from 'next/link';
import DateFormatter from '../common/DateFormatter';

export type PostItem = {
  comment: string;
  nick: string;
  createdAt: string;
  url: string;
};

export interface RelatedPostsProps {
  list: PostItem[];
  className?: string;
}

const CommentItem = ({ item }) => {
  const { title, date, excerpt, slug } = item;
  return (
    <WidgetsContainer id="recent-comments" className="w-60 h-36 flex-1">
      <div className="flex flex-col p-2">
        <div className="truncate">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            {title}
          </Link>
        </div>

        <div className="text-xs text-gray-500 ellipsis-3">{excerpt}</div>
        <DateFormatter dateString={date} className="text-xs text-gray-500 text-right mt-3" />
      </div>
    </WidgetsContainer>
  );
};

const RelatedPosts: FC<RelatedPostsProps> = (props) => {
  const { list } = props;
  return (
    <>
      <span className="font-medium text-xl">Related Posts</span>
      <div className="flex pt-2">
        {list.map((item, index) => (
          <CommentItem item={item} key={index} />
        ))}
      </div>
    </>
  );
};

RelatedPosts.defaultProps = {
  className: ''
};

export default RelatedPosts;
