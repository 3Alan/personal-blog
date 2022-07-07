import { FC } from 'react';
import useSWR from 'swr';
import { FaRegHeart } from 'react-icons/fa';
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
    <div
      onClick={onLikeClick}
      className="cursor-pointer flex items-center bg-red-100 py-1 px-4 rounded-full hover:bg-red-200"
    >
      <FaRegHeart style={{ color: '#EF4444' }} className="text-xs" />
      <span className="pl-2 text-red-400">{data ? data.num : '...'}</span>
    </div>
  );
};

export default Like;
