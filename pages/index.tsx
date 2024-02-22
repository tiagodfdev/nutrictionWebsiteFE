/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { InferGetStaticPropsType } from 'next';
import React from 'react';
import HomeContent from '../components/Pages/HomeContent';
import { Iingredient } from '../types';
import searchBarData from '../utils/consts/searchBarData';
import JsonArray from '../JsonManagement/JsonArray';

export const getStaticProps = async () => {
  const nutrictionDB = new JsonArray('utils/consts', 'data', 'nutrictionDb');
  const allData:Iingredient[] = nutrictionDB.getAll() as Iingredient[];
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
