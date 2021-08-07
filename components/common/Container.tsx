import { FC } from 'react';

interface ContainerProps {
  className?: string;
  width?: string;
}

const Container: FC<ContainerProps> = (props) => {
  const { className, children, width = 'max-w-screen-lg' } = props;
  return (
    <div className={`w-full pb-10 dark:bg-dark-bg transition-colors ${className}`}>
      <div className={`container mx-auto ${width}`}>{children}</div>
    </div>
  );
};

export default Container;
