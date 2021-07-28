import Container from '../components/Container';
import PostList from '../components/PostList';
import Intro from '../components/intro';
import Layout from '../components/Layout';
import { getAllPosts } from '../utils/api';
import Head from 'next/head';

export default function Index({ allPosts }) {
  const morePosts = allPosts;

  return (
    <>
      <Layout>
        <Head>
          <title>Alan | 前端博客</title>
        </Head>
        <Container>
          <Intro />
          {morePosts.length > 0 && <PostList posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'excerpt', 'layout']);

  return {
    props: { allPosts }
  };
}
