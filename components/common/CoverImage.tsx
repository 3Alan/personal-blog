import cn from 'classnames';
import Link from 'next/link';
import DateFormatter from './DateFormatter';
import Tag from './Tag';
import { FaEye } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useState, FC } from 'react';

export interface CoverImageProps {
  title: string;
  src: string;
  date: string;
  slug?: boolean;
}

const CoverImage: FC<CoverImageProps> = ({ title, src, slug, date }) => {
  const router = useRouter();
  const [pathName] = useState(router.asPath);
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('w-full h-72 sm:h-96', {
        'hover:shadow-medium transition-shadow duration-200': slug,
        'shadow-small': slug
      })}
      style={{ height: 450 }}
    />
  );
  return (
    <div className="relative sm:mx-0">
      <div className="bg-black bg-opacity-60 w-full h-72 sm:h-96 absolute px-6" style={{ height: 450 }}>
        <div className="lg:max-w-screen-lg h-full mx-auto text-white flex flex-col justify-center">
          <div className="py-3 whitespace-nowrap truncate mb-2 text-2xl font-medium sm:text-5xl sm:mb-6">{title}</div>
          <div className="inline-flex items-center mb-1 sm:mb-4">
            <div className="text-sm font-serif italic sm:text-xl mr-4 sm:mr-10">
              <DateFormatter dateString={date} />
            </div>
            <div className="text-sm inline-flex items-center" data-flag-title={title}>
              <FaEye />
              <span id={pathName} className="waline-visitor-count ml-1"></span>
            </div>
          </div>

          <div>
            <Tag name="前端" />
            <Tag name="前端" />
            <Tag name="前端" />
          </div>
        </div>
      </div>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
