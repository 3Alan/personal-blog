import { memo, useState, useEffect, FC } from 'react';

interface TocProps {
  hostId: string;
}

// TODO: 待重构
const Toc: FC<TocProps> = ({ hostId }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const hostContainer = document.getElementById(hostId);
    const headList = hostContainer.querySelectorAll("[data-anchor='headings']");
    const newList = [];
    Array.prototype.forEach.call(headList, (item) => {
      const text = decodeURI(item.href.split('#')[1]);

      newList.push({ href: item.href, text });
    });

    setList(newList);
  }, [hostId]);

  return (
    <div className="hidden py-4 px-2 h-96 sticky top-20 mt-2 mb-10 rounded-xl bg-white lg:flex lg:flex-1 lg:flex-col dark:bg-dark-content dark:text-gray-300">
      <div>目录</div>
      <div className="flex-1 pl-4 text-sm overflow-y-auto">
        {list.map((item, key) => (
          <div key={key} className="py-1">
            <a href={item.href}>{item.text}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Toc);
