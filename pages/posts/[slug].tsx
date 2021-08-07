import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/common/Container';
import Comment from '../../components/post/Comment';
import PostBody from '../../components/post/PostBody';
import Layout from '../../components/common/Layout';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '../../utils/postTool';
import PostTitle from '../../components/post/PostTitle';
import Head from 'next/head';
import CoverImage from '../../components/common/CoverImage';
import MenuBar from '../../components/common/MeunBar';
import Toc from '../../components/post/toc';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import markdownToHtml from '../../utils/markdownToHtml';
import RelatedPosts from '../../components/widgets/RelatedPosts';
import { isEmptyArray } from '../../utils/verify';
import Like from '../../components/post/Like';

// TODO: 类型待完善
export type PostProps = {
  post: any;
  relatedPosts: any[];
};

const Post: FC<PostProps> = ({ post, relatedPosts }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>Alan Blog | {post.title}</title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
      <Layout hasNav={false} id="post">
        <CoverImage
          src="https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2019/01/762065921.jpg"
          title={post.title}
          date={post.date}
        />
        <Like slug={post?.slug} />
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <div className="flex justify-center">
              <MenuBar className="sticky top-20" />
              <div className="lg:max-w-screen-md">
                <article className="px-4 mt-2 mr-2 my-6 dark:bg-dark-content">
                  <PostBody content={post.content} />
                </article>

                {!isEmptyArray(relatedPosts) && <RelatedPosts list={relatedPosts} />}

                <div className="py-8 px-4 my-2 mr-2 shadow-card rounded-xl dark:bg-dark-content bg-white">
                  <Comment />
                </div>
                <Toc content={post.toc} />
              </div>
            </div>
          )}
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug as string, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'tags'
  ]);

  const relatedPosts = getRelatedPosts(post.tags, post.slug);

  const { content, toc } = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
        toc
      },
      relatedPosts
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
};

export default Post;
