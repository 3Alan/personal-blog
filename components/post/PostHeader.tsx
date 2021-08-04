import { FC } from 'react';
import PostTitle from './PostTitle';

export interface PostHeaderProps {
  title: string;
  coverImage?: string;
  date?: string;
}

const PostHeader: FC<PostHeaderProps> = ({ title }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12"></div>
      <div className="max-w-md mx-auto">
        <div className="block md:hidden mb-6"></div>
      </div>
    </>
  );
};

export default PostHeader;
