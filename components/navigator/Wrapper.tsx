import { useRouter } from 'next/router';
import { useEffect, useState, FC } from 'react';
import { FULL_PAGE_LIST, CSR } from '../../utils/constants';
import { useScroll } from 'ahooks';
import cn from 'classnames';

const NavigatorWrapper: FC = ({ children }) => {
  let scroll;
  const router = useRouter();
  const [isFullPage, setIsFullPage] = useState(false);

  if (CSR) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    scroll = useScroll(document);
  }

  useEffect(() => {
    if (FULL_PAGE_LIST.includes(router.pathname)) {
      setIsFullPage(true);
    }
  }, [router, isFullPage]);
  return (
    <div
      className={cn(
        // bg-opacity-90 backdrop-filter backdrop-saturate-200 backdrop-blur-lg
        `shadow-navigator px-2 fixed transition-all bg-white hidden h-16 inset-0 z-50 dark:bg-dark-content dark:border-dark-border`,
        {
          // 'shadow-navigator': !isFullPage || (scroll && scroll.top > 200),
          'sm:flex': !isFullPage || (scroll && scroll.top > 200)
        }
      )}
    >
      <div className="max-w-screen-lg mx-auto flex w-full justify-between items-center py-2">{children}</div>
    </div>
  );
};

export default NavigatorWrapper;
