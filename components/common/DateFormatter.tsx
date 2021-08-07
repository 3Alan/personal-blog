import dayjs from 'dayjs';
import { FC } from 'react';

export interface DateFormatterProps {
  dateString: string;
  className?: string;
}

const DateFormatter: FC<DateFormatterProps> = ({ dateString, className }) => {
  const date = dayjs(dateString);
  return (
    <time dateTime={dateString} className={className}>
      {dayjs(date).format('MMM D, YYYY')}
    </time>
  );
};

DateFormatter.defaultProps = {
  className: ''
};

export default DateFormatter;
