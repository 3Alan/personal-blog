import { FC } from 'react';

export interface WidgetsContainerProps {
  title?: string;
  id?: string;
  className?: string;
}

const WidgetsContainer: FC<WidgetsContainerProps> = (props) => {
  const { id, title, children, className } = props;
  return (
    <div
      id={id}
      className={`bg-white border overflow-x-hidden rounded-3xl dark:bg-dark-content dark:text-gray-300 ${className}`}
    >
      {title && <div className="px-6 py-4 font-medium border-b">{title}</div>}
      <div className="pb-4 px-4">{children}</div>
    </div>
  );
};

export default WidgetsContainer;
