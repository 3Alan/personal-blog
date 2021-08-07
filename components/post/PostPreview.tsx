import DateFormatter from '../common/DateFormatter';
import Link from 'next/link';
import { FC } from 'react';
import Card from './Card';

export interface PostPreviewProps {
  layout?: string;
  title: string;
  coverImage: string;
  date?: string;
  excerpt?: string;
  slug: string;
}

const HeadImgLayout: FC<PostPreviewProps> = (props) => {
  const { title, coverImage, date, slug } = props;

  return (
    <Card>
      <div className="md:flex p-4">
        <div className="md:py-1 md:flex-1 md:pr-8 flex flex-col justify-between">
          <div className="mb-4">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="block text-base leading-relaxed font-semibold text-gray-700 dark:text-gray-100">{title}</a>
            </Link>
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <div>
              <DateFormatter dateString={date} />
            </div>
            <div>1542 reviews</div>
          </div>
        </div>
        <div className="hidden md:flex md:flex-shrink-0 rounded-2xl overflow-hidden">
          <img className="h-40 w-40 object-cover" src={coverImage} />
        </div>
      </div>
    </Card>
  );
};

const PostPreview: FC<PostPreviewProps> = (props) => {
  return <HeadImgLayout {...props} />;
};

export default PostPreview;
