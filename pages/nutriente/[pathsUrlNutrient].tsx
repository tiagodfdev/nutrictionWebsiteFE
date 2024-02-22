/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import {
  IAllPaths, NutrientDB,
} from '../../types';
import JsonArray from '../../JsonManagement/JsonArray';
import NutrientInfo from '../../components/Pages/NutrientInfo';

const StaticNutrientPage = ({ data }:InferGetStaticPropsType<typeof getStaticProps>) => (
    <NutrientInfo data={data} />
);

const nutrientDB = new JsonArray('utils/consts', 'aboutNutrientContents');

export const getStaticPaths: GetStaticPaths = async () => {
  const allPaths:IAllPaths = nutrientDB.getArrayByKey('url') as unknown as Pick<NutrientDB, 'url'>[];
  const paths = allPaths.map((url) => ({
    params: {
      pathsUrlNutrient: url as unknown as string,
    },
  }));
  return { paths, fallback: false };
};

export async function getStaticProps({ params }:any) {
  // TODO create a interface for a nutrient Page
  const pageData = nutrientDB.getOneByKey('url', params.pathsUrlNutrient as string);
  const pathUrl:string = params.pathsUrlNutrient;
  const data = { pageData, pathUrl };
  return { props: { data } };
}

export default StaticNutrientPage;
