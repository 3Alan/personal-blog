import Container from '../components/Container';
import PostList from '../components/PostList';
import Intro from '../components/Intro';
import Layout from '../components/Layout';
import { getAllPosts } from '../utils/postTool';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { FC } from 'react';

export interface IndexProps {
  allPosts: any[];
}

const Index: FC<IndexProps> = ({ allPosts }) => {
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
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'excerpt', 'layout']);

  return {
    props: { allPosts }
  };
};

export default Index;
