import DateFormatter from '../date-formatter';
import PostTitle from '../PostTitle';

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12"></div>
      <div className="max-w-md mx-auto">
        <div className="block md:hidden mb-6"></div>
        {/* <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div> */}
      </div>
    </>
  );
}
