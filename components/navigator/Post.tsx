import NavigatorWrapper from './Wrapper';
import { FC } from 'react';
import MenuBar from '../common/MeunBar';
import Like from '../post/Like';

export type PostNavigatorProps = {
  post: any;
};

const PostNavigator: FC<PostNavigatorProps> = (props) => {
  const { post } = props;
  return (
    <NavigatorWrapper>
      <div className="w-96 truncate font-medium cursor-default">{post.title}</div>
      <div className="flex items-center space-x-2">
        <Like slug={post?.slug} />
        <MenuBar />
      </div>
    </NavigatorWrapper>
  );
};

export default PostNavigator;
