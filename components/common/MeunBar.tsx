import { FaComments, FaArrowUp } from 'react-icons/fa';
import { FC } from 'react';
import Icon from './Icon';
import cn from 'classnames';

export type MenuBarProps = {
  className?: string;
};

const MenuBar: FC<MenuBarProps> = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToComment = () => {
    const vComment = document.getElementById('wcomments');
    vComment.scrollIntoView();
  };

  return (
    <div className={cn(className, 'flex flex-col z-50')}>
      <div
        className="w-8 h-8 mb-2 flex bg-gray-100 justify-center items-center rounded-full cursor-pointer dark:bg-gray-800"
        onClick={scrollToComment}
      >
        <Icon customStyle={{ color: '#6EE7B7', className: 'text-xs dark:text-gray-900' }} component={<FaComments />} />
      </div>
      <div
        className="w-8 h-8 mb-2 flex bg-gray-100 justify-center items-center rounded-full cursor-pointer dark:bg-gray-800"
        onClick={scrollToTop}
      >
        <Icon customStyle={{ color: '#60A5FA', className: 'text-xs dark:text-gray-900' }} component={<FaArrowUp />} />
      </div>
    </div>
  );
};

export default MenuBar;
