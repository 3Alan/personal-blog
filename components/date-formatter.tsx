import dayjs from 'dayjs';
import { FC } from 'react';

export interface DateFormatterProps {
  dateString: string;
}

const DateFormatter: FC<DateFormatterProps> = ({ dateString }) => {
  const date = dayjs(dateString);
  return <time dateTime={dateString}>{dayjs(date).format('YYYY-MM-DD')}</time>;
};

export default DateFormatter;
