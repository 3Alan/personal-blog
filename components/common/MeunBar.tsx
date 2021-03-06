import { FaSearch, FaRegComments, FaChevronUp } from 'react-icons/fa';
import { FC } from 'react';
import cn from 'classnames';

export type MenuBarItemProps = {
  className?: string;
  onClick: () => void;
};

const MenuBarItem: FC<MenuBarItemProps> = ({ onClick, className, children }) => {
  return (
    <div
      className={cn(
        className,
        `w-8 h-8 flex bg-gray-100 justify-center items-center rounded-full cursor-pointer hover:bg-gray-200 dark:bg-gray-800`
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const MenuBar: FC = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToComment = () => {
    const vComment = document.getElementById('wcomments');
    vComment.scrollIntoView();
  };

  return (
    <>
      <MenuBarItem onClick={scrollToComment} className="bg-blue-100 hover:bg-blue-200">
        <FaRegComments style={{ color: '#3B82F6' }} className="text-xs dark:text-gray-900" />
      </MenuBarItem>
      <MenuBarItem onClick={scrollToTop} className="bg-blue-100 hover:bg-blue-200">
        <FaSearch style={{ color: '#60A5FA' }} className="text-xs dark:text-gray-900" />
      </MenuBarItem>
      <MenuBarItem onClick={scrollToTop}>
        <FaChevronUp style={{ color: '#9CA3AF' }} className="text-xs dark:text-gray-900" />
      </MenuBarItem>
    </>
  );
};

export default MenuBar;
