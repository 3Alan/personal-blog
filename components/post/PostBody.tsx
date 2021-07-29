import markdownStyles from './markdown-styles.module.scss';
import cn from 'classnames';
import { FC } from 'react';

type PostBodyProps = {
  content: string;
};

const PostBody: FC<PostBodyProps> = ({ content }) => {
  return (
    <div
      className={cn('dark:text-gray-300', markdownStyles['markdown'])}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
