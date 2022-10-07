/* eslint-disable no-nested-ternary */
import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { getStaticProps } from '../../pages/item/[pathsUrl]';
import DetailsTable from '../DetailsTable';
import MainLayout from '../Layout/MainLayout';
import SearchBar from '../SearchBar';

const DetailsContent = ({ data }:InferGetStaticPropsType<typeof getStaticProps>) => (
    <>
      <Head>
        <title>{`Informações Nutricionais - ${data.pageData[0].alimentoEPreparacao}`}</title>
        <meta name='description' content={`Informação Nutricional de ${data.pageData[0].alimentoEPreparacao}`} />
        <script type='application/ld+json'>
          {`
            {
              "@context": "https://schema.org",
              "@type": "NutritionInformation",
              "name": "${data.pageData[0].alimentoEPreparacao}",
              "calories": ${data.pageData[0]['energia-kcal']} calorias,
              "carbohydrateContent": ${data.pageData[0]['carboidrato-g']} g,
              "cholesterolContent": ${data.pageData[0]['colesterol-mg']} mg,
              "fatContent": ${data.pageData[0]['lipidiosTotais-g']} mg,
              "fiberContent": ${data.pageData[0]['fibraTotal-g']} g,
              "proteinContent": ${data.pageData[0]['proteina-g']} g,
              "saturatedFatContent": ${data.pageData[0]['gorduraSaturados-g']} g,
              "sodiumContent": ${data.pageData[0]['sodio-mg']} mg,
              "sugarContent": ${data.pageData[0]['acucarTotal-g']} g,
              "transFatContent": ${data.pageData[0]['gorduraTransTotal-g']} g,
              "unsaturatedFatContent": ${data.pageData[0]['gorduraPolissaturada-g'] + data.pageData[0]['gorduraMonossaturada-g']} g,
            }
          `}
        </script>
      </Head>
      <Box
        display='flex'
        width='90%'
        alignItems='center'
        justifyContent='center'
        mb= '10vw'
      >
        <SearchBar data={data.searchBarData} />
      </Box>
      <MainLayout>
        <Box
            display='flex'
            flexDirection='column'
            width='90%'
            alignItems='center'
          >
          <Typography component='h1' sx={{
            fontSize: 18,
            fontWeight: 'bold',
            mb: 1,
          }} >{data.pageData[0].alimentoEPreparacao}</Typography>
          <Box
            display='flex'
            mb={2}
            width='100%'
            maxWidth='600px'
          >
            <DetailsTable data={data.pageData} />
          </Box>
        </Box>
      </MainLayout>
    </>
);

export default DetailsContent;
