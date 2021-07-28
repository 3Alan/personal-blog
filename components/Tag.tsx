import { FC } from 'react';

export interface TagProps {
  name: string;
  color?: string;
}

const Tag: FC<TagProps> = (props) => {
  const { name } = props;
  return <span className=" text-xs rounded-full border px-3 py-1 mr-3 sm:text-sm">{name}</span>;
};

export default Tag;
