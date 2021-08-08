import { FC } from 'react';

interface ContainerProps {
  className?: string;
  innerClassName?: string;
  width?: string;
}

const Container: FC<ContainerProps> = (props) => {
  const { className, innerClassName, children, width } = props;
  return (
    <div className={`w-full pb-10 dark:bg-dark-bg transition-colors ${className}`}>
      <div className={`container mx-auto ${width} ${innerClassName}`}>{children}</div>
    </div>
  );
};

Container.defaultProps = {
  className: '',
  innerClassName: '',
  width: 'max-w-screen-lg'
};

export default Container;
