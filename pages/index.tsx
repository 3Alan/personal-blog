import Container from '../components/common/Container';
import PostList from '../components/post/PostList';
import Layout from '../components/common/Layout';
import { getPostsByPage } from '../utils/postTool';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import RecentComments from '../components/widgets/RecentComments';
import AlgoliaSearch from '../components/common/search/AlgoliaSearch';
import CommonNavigator from '../components/navigator/Common';
import useToggle from '../hooks/useToggle';

export interface IndexProps {
  // 类型待完善
  postList: any[];
}

const Home: FC<IndexProps> = ({ postList }) => {
  const [showSearch, toggleShowSearch] = useToggle();
  return (
    <Layout>
      <Head>
        <title>Alan | 前端博客</title>
      </Head>
      <AlgoliaSearch show={showSearch} toggleShow={toggleShowSearch} />
      <CommonNavigator toggleShowSearch={toggleShowSearch} />
      <Container className="pt-8">
        <div className="flex items-start">
          {postList.length > 0 && <PostList posts={postList} className="md:mr-4 flex-1" />}
          <RecentComments className="hidden md:flex md:flex-col md:w-80" />
        </div>
      </Container>
    </Layout>
  );
};

// 500问题所在，getServerSideProps在服务端运行，所以getPostsByPage获取的posts路径错误
// 解决思路：打包时将_posts目录复制到打包后的文件中，目前暂无具体实现思路
export const getStaticProps: GetStaticProps = async () => {
  const postList = getPostsByPage(['title', 'date', 'slug', 'coverImage'], 1, 10);

  return {
    props: { postList }
  };
};

export default Home;
