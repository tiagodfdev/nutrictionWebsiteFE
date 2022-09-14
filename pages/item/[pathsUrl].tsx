/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { IAllPaths, Iingredient, ISearchBarData } from '../../types';
import nutrictionDB from '../../network/services/nutrictionDB';
import DetailsContent from '../../components/Pages/DetailsContent';

const Item = ({ data }:InferGetStaticPropsType<typeof getStaticProps>) => (
    <DetailsContent data={data} />
);
export const getStaticPaths: GetStaticPaths = async () => {
  const allData:IAllPaths[] = await nutrictionDB.getAllPaths();
  const paths = allData.map((url) => ({
    params: {
      pathsUrl: url.pathUrl,
    },
  }));
  return { paths, fallback: false };
};

export async function getStaticProps({ params }:any) {
  const pageData:Iingredient[] = await nutrictionDB.getOneByUrl(params!.pathsUrl as string);
  const searchBarData:ISearchBarData[] = await nutrictionDB.getSearchBarData();
  const data = { pageData, searchBarData };
  return { props: { data } };
}

export default Item;
