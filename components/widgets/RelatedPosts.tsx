import { FC } from 'react';
import WidgetsContainer from './Container';
import Link from 'next/link';
import DateFormatter from '../DateFormatter';

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
    <WidgetsContainer id="recent-comments" className="w-60 h-36">
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
    <div>
      相关文章
      {list.map((item, index) => (
        <CommentItem item={item} key={index} />
      ))}
    </div>
  );
};

RelatedPosts.defaultProps = {
  className: ''
};

export default RelatedPosts;
