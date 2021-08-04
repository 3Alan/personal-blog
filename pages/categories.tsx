import Container from '../components/common/Container';
import Layout from '../components/common/Layout';
import { getAllPosts } from '../utils/postTool';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { FC } from 'react';

export interface CategoriesProps {
  allPosts: any[];
}

const Categories: FC<CategoriesProps> = () => {
  return (
    <Layout>
      <Head>
        <title>分类-Alan | 前端博客</title>
      </Head>
      <Container className="pt-8">
        <div className="flex items-start">分类页面</div>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'excerpt', 'layout']);

  return {
    props: { allPosts }
  };
};

export default Categories;
