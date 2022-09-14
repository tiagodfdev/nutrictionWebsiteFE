/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { InferGetStaticPropsType } from 'next';
import React from 'react';
import HomeContent from '../components/Pages/HomeContent';
import nutrictionDB from '../network/services/nutrictionDB';
import { Iingredient, ISearchBarData } from '../types';

export const getStaticProps = async () => {
  const allData:Iingredient[] = await nutrictionDB.getAll();
  const searchBarData:ISearchBarData[] = allData.map((item) => {
    const objToReturn = {
      descricaoAlimento: item.descricaoAlimento,
      alimentoEPreparacao: item.alimentoEPreparacao,
      pathUrl: item.pathUrl,
    };
    return objToReturn;
  });
  const data = { allData, searchBarData };
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
