import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/Container';
import Comment from '../../components/Comment';
import PostBody from '../../components/post/PostBody';
import Layout from '../../components/Layout';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '../../utils/postTool';
import PostTitle from '../../components/PostTitle';
import Head from 'next/head';
import CoverImage from '../../components/CoverImage';
import MenuBar from '../../components/MeunBar';
import Toc from '../../components/post/toc';
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import markdownToHtml from '../../utils/markdownToHtml';
import RelatedPosts from '../../components/widgets/RelatedPosts';
import { isEmptyArray } from '../../utils/verify';

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
      <MenuBar />
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
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <div className="flex flex-row">
              <div className="w-full lg:max-w-screen-md mr-4">
                <article
                  style={{ width: 768 }}
                  className="py-2 px-4 mt-2 mr-2 my-6 rounded-xl dark:bg-dark-content bg-gray-50"
                >
                  <PostBody content={post.content} />
                </article>

                {!isEmptyArray(relatedPosts) && <RelatedPosts list={relatedPosts} />}

                <div className="py-8 px-4 my-2 mr-2 shadow-card rounded-xl dark:bg-dark-content bg-white">
                  <Comment />
                </div>
              </div>
              <Toc content={post.toc} />
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
