import { InferGetStaticPropsType } from 'next';
import React from 'react';
import HomeContent from '../components/Pages/HomeContent';
import nutrictionDB from '../network/services/nutrictionDB';
import { Iingredient } from '../types';

export const getStaticProps = async () => {
  const data:Iingredient[] = await nutrictionDB.getAll();
  return {
    props: {
      data,
    },
  };
};
function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <HomeContent data={data} />
  );
}

export default Home;
