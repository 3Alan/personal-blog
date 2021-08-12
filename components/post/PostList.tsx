import { FC } from 'react';
import PostPreview from './PostPreview';

export interface PostListProps {
  posts: any[];
  className?: string;
}

const PostList: FC<PostListProps> = ({ posts, className }) => {
  return (
    <div className={className}>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={
            post.coverImage || 'https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2019/01/762065921.jpg'
          }
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
};

PostList.defaultProps = {
  className: ''
};

export default PostList;
