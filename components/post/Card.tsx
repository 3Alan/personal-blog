import { FC } from 'react';
import cn from 'classnames';

export type CardProps = {
  className?: string;
};

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        className,
        'bg-white transition-all border rounded-2xl hover:bg-card-hover hover:shadow-card overflow-hidden mx-1 cursor-pointer hover:border-card-hover md:rounded-3xl md:mb-10 sm:mx-2 dark:bg-dark-content dark:hover:bg-dark-hover-content dark:border-dark-border'
      )}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  className: ''
};

export default Card;
