import Footer from './Footer';
import Meta from './Meta';
import Navigator from '../navigator/index';
import cn from 'classnames';
import { FC } from 'react';

export interface LayoutProps {
  id?: string;
  hasNav?: boolean;
}

const Layout: FC<LayoutProps> = (props) => {
  const { children, hasNav = true, id } = props;
  return (
    <>
      <Meta />
      <Navigator />
      <div
        className={cn('min-h-screen', {
          'pt-16': hasNav
        })}
        id={id}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
