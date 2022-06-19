import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { Iingredient } from '../types';
import nutrictionDB from '../network/services/nutrictionDB';
import HomeContent from '../components/Pages/HomeContent';
import CheckToInput from '../components/CheckToInput';
// import sortByElement from '../utils/common/sortByElement';

/* export const getStaticProps = async () => {
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
*/
function Home() {
  return (
    <>
      <CheckToInput id='gorduras' label='Limitar gorduras' />
      <CheckToInput id='calorias' label='Limitar calorias' />
    </>

  );
}
export default Home;
