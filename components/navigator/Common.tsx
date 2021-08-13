import { FaBasketballBall } from 'react-icons/fa';
import Link from 'next/link';
import Tools from './Tools';
import Icon from '../common/Icon';
import NavigatorWrapper from './Wrapper';
import { FC } from 'react';

export type CommonNavigatorProps = {
  toggleShowSearch: any;
};

function HomeIcon() {
  return (
    <Link href="/">
      <a>
        <div className="flex items-center pl-5">
          <Icon customStyle={{ color: '#fbb01f', className: 'text-xl' }} component={<FaBasketballBall />} />
        </div>
      </a>
    </Link>
  );
}

function NavItem({ name, link = '/' }) {
  return (
    <div className="px-4 font-semibold text-sm font-mono hover:text-blue-500  text-gray-500 dark:text-gray-300 dark:hover:text-blue-400">
      <Link href={link}>
        <a>{name}</a>
      </Link>
    </div>
  );
}

function NavList() {
  return (
    <div className="flex-1 flex items-center ml-2">
      <NavItem name="分类" link="/categories" />
      <NavItem name="归档" />
      <NavItem name="友链" />
      <NavItem name="留言" />
      <NavItem name="关于" link="/resume" />
    </div>
  );
}

const CommonNavigator: FC<CommonNavigatorProps> = ({ toggleShowSearch }) => {
  return (
    <NavigatorWrapper>
      <HomeIcon />
      <NavList />
      <Tools toggleShowSearch={toggleShowSearch} />
    </NavigatorWrapper>
  );
};

export default CommonNavigator;
