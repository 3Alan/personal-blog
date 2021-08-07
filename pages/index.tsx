import Container from '../components/common/Container';
import PostList from '../components/post/PostList';
import Layout from '../components/common/Layout';
import { getPostsByPage } from '../utils/postTool';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import RecentComments from '../components/widgets/RecentComments';
import AlgoliaSearch from '../components/common/search/AlgoliaSearch';

export interface IndexProps {
  // 类型待完善
  postList: any[];
}

const Home: FC<IndexProps> = ({ postList }) => {
  return (
    <Layout>
      <Head>
        <title>Alan | 前端博客</title>
      </Head>
      <Container className="pt-8">
        <AlgoliaSearch />
        <div className="flex items-start">
          {postList.length > 0 && <PostList posts={postList} className="md:mr-4" />}
          <RecentComments className="hidden md:flex flex-1" />
        </div>
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const postList = getPostsByPage(['title', 'date', 'slug', 'coverImage'], query.p || 1, 10);

  return {
    props: { postList }
  };
};

export default Home;
