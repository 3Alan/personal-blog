import { FC } from 'react';
import useSWR from 'swr';
import { FaHeart } from 'react-icons/fa';
import Icon from '../common/Icon';
import fetcher from '../../utils/fetch';

const Like: FC<{ slug: string }> = ({ slug }) => {
  const { data, mutate } = useSWR(`/api/post/likes?slug=${slug}`, fetcher);

  const onLikeClick = async () => {
    // 立刻更新缓存中的num，第二个参数中的false表示禁用校验
    mutate((cacheData) => {
      return { num: cacheData.num + 1 };
    }, false);
    await fetch(`/api/post/likes`, {
      method: 'PATCH',
      body: JSON.stringify({
        slug
      })
    });
    // 与数据库中的num进行校验对齐，保证本地数据的正确性
    mutate();
  };

  return (
    <div onClick={onLikeClick} className="cursor-pointer flex">
      <Icon component={<FaHeart />} customStyle={{ color: 'red' }} />
      {data ? data.num : 'loading...'}
    </div>
  );
};

export default Like;
