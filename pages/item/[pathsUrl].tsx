/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React from 'react';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { IAllPaths, Iingredient } from '../../types';
import JsonArray from '../../JsonManagement/JsonArray';
import DetailsContent from '../../components/Pages/DetailsContent';
import allTextsData from '../../utils/consts/aboutFood';

const Item = ({ data }:InferGetStaticPropsType<typeof getStaticProps>) => (
    <DetailsContent data={data} />
);

const nutrictionDB = new JsonArray('utils/consts', 'data', 'nutrictionDb');
export const getStaticPaths: GetStaticPaths = async () => {
  const allPaths:IAllPaths = nutrictionDB.getArrayByKey('pathUrl') as unknown as Pick<Iingredient, 'pathUrl'>[];
  const paths = allPaths.map((url) => ({
    params: {
      pathsUrl: url as unknown as string,
    },
  }));
  return { paths, fallback: false };
};

export async function getStaticProps({ params }:any) {
  const pageData:Object = nutrictionDB.getOneByKey('pathUrl', params.pathsUrl as string) as Object;
  const pageIndex:number[] = nutrictionDB.getIdFromKeyValue('pathUrl', params.pathsUrl as string);
  const pageText = allTextsData[pageIndex[0]];
  const pathUrl:string = params.pathsUrl;
  const data = {
    pageData, pathUrl, pageText,
  };
  return { props: { data } };
}

export default Item;
