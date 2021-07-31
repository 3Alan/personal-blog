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
      className={`shadow-card overflow-x-hidden rounded-xl bg-white lg:flex lg:flex-col dark:bg-dark-content dark:text-gray-300 ${className}`}
    >
      {title && <div className="px-4 pt-4 font-medium">{title}</div>}
      <div className="pb-4 px-4">{children}</div>
    </div>
  );
};

export default WidgetsContainer;
