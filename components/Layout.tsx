import Footer from './Footer';
import Meta from './Meta';
import Navigator from './navigator/index';
import cn from 'classnames';
import { FC } from 'react';

export interface LayoutProps {
  hasNav?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, hasNav = true }) => {
  return (
    <>
      <Meta />
      <Navigator />
      <div
        className={cn('min-h-screen', {
          'pt-16': hasNav
        })}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
