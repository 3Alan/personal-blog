import DateFormatter from './date-formatter';
import Link from 'next/link';
import { FC } from 'react';

export interface PostPreviewProps {
  layout?: string;
  title: string;
  coverImage: string;
  date?: string;
  excerpt?: string;
  slug: string;
}

function Card({ children }) {
  return (
    <div className="bg-white shadow-card mb-5 rounded md:rounded-xl overflow-hidden mx-1 md:mb-10 sm:mx-2">
      {children}
    </div>
  );
}

const HeadImgLayout: FC<PostPreviewProps> = (props) => {
  const { title, coverImage, date, slug, excerpt } = props;

  return (
    <Card>
      <div className="md:flex p-4">
        <div className="hidden md:flex md:flex-shrink-0 rounded overflow-hidden">
          <img className="h-40 w-40 object-cover" src={coverImage} />
        </div>
        <div className="md:pl-6 md:py-2 flex flex-col justify-between">
          <div className="mb-4">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="block text-base leading-tight font-bold text-gray-700 hover:underline">{title}</a>
            </Link>
            <p className="text-sm mt-2 text-gray-500 break-words">{excerpt}</p>
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <div>
              <DateFormatter dateString={date} />
            </div>
            <div>1542 reviews</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const PostPreview: FC<PostPreviewProps> = (props) => {
  return <HeadImgLayout {...props} />;
};

export default PostPreview;
