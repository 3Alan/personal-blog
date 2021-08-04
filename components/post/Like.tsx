import { useEffect, useCallback, useState, FC } from 'react';

import { FaHeart } from 'react-icons/fa';
import Icon from '../common/Icon';

const Like: FC<{ slug: string }> = ({ slug }) => {
  const [likeNum, setLikeNum] = useState('');

  const init = useCallback(async () => {
    const res = await fetch(`/api/post/likes?slug=${slug}`);
    const { num } = await res.json();
    setLikeNum(num);
  }, [slug, setLikeNum]);

  useEffect(() => {
    init();
  }, [init]);

  const onLikeClick = async () => {
    const res = await fetch(`/api/post/likes`, {
      method: 'PATCH',
      body: JSON.stringify({
        slug
      })
    });
    const { num } = await res.json();
    setLikeNum(num);
  };
  return (
    <div onClick={onLikeClick} className="cursor-pointer flex">
      <Icon component={<FaHeart />} customStyle={{ color: 'red' }} />
      {likeNum}
    </div>
  );
};

export default Like;
