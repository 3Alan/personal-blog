import { useEffect, memo, FC } from 'react';

import style from './index.module.scss';

interface TocProps {
  content: string;
}

// TODO: 滚动监听，active效果
const Toc: FC<TocProps> = (props) => {
  const { content } = props;

  useEffect(() => {
    // const elementList = document.querySelectorAll();
  }, []);

  return (
    <div
      id="toc"
      style={{ width: 240 }}
      className="hidden py-4 px-2 h-96 sticky top-20 mt-2 mb-10 rounded-xl bg-white lg:flex lg:flex-1 lg:flex-col dark:bg-dark-content dark:text-gray-300"
    >
      <div>目录</div>
      <div
        className={`${style.wrap} flex-1 text-sm overflow-y-auto`}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default memo(Toc);
