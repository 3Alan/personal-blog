import mdStyle from './markdown-styles.module.scss';
import cn from 'classnames';
import { FC } from 'react';

const PostBody: FC = ({ children }) => {
  return <div className={cn('dark:text-gray-300', mdStyle.markdown)}>{children}</div>;
};

export default PostBody;
