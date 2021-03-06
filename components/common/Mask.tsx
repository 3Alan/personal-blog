import { useRef, useEffect, FC } from 'react';
import cn from 'classnames';
import useClickAway from '../../hooks/useClickAway';

export type MaskProps = {
  show: boolean;
  toggleShow: any;
  className?: string;
};

const Mask: FC<MaskProps> = (props) => {
  const { children, show, className, toggleShow } = props;
  const targetRef = useRef();

  useClickAway(() => {
    toggleShow();
  }, targetRef);

  useEffect(() => {
    if (show && document.body.style.height !== '100%') {
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('height');
      document.body.style.removeProperty('overflow');
    }

    return () => {
      document.body.style.removeProperty('height');
      document.body.style.removeProperty('overflow');
    };
  }, [show]);

  return (
    <>
      <div
        className={cn(
          className,
          'z-50 opacity-100 w-screen h-screen flex flex-col justify-center items-center fixed top-0 left-0 bg-blue-50'
        )}
      >
        <div ref={targetRef}>{children}</div>
      </div>
    </>
  );
};

Mask.defaultProps = {
  className: ''
};

export default Mask;
