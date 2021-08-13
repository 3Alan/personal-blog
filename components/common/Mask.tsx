import { useRef, useEffect, FC } from 'react';
import cn from 'classnames';

export type MaskProps = {
  show: boolean;
  className?: string;
};

const Mask: FC<MaskProps> = (props) => {
  const { children, show, className } = props;
  const targetRef = useRef();

  useEffect(() => {
    if (show && document.body.style.height !== '100%') {
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('height');
      document.body.style.removeProperty('overflow');
    }
  }, [show]);

  return (
    <>
      {show && (
        <div
          className={cn(
            className,
            'z-50 opacity-100 w-screen h-screen flex flex-col justify-center items-center fixed top-0 left-0 bg-blue-50'
          )}
        >
          <div ref={targetRef}>{children}</div>
        </div>
      )}
    </>
  );
};

Mask.defaultProps = {
  className: ''
};

export default Mask;
