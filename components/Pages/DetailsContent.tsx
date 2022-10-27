/* eslint-disable no-nested-ternary */
import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { getStaticProps } from '../../pages/item/[pathsUrl]';
import DetailsTable from '../DetailsTable';
import MainLayout from '../Layout/MainLayout';
import SearchBar from '../SearchBar';
// import Sticker from '../Sticker';
import StickerBox from '../StickerBox';
import { IkeyOfIngredients } from '../../types';
import vd from '../../utils/consts/vd';
import { excludeOfTable } from '../../config/config';
import { getByValue } from '../../utils/features/ingredientKeyConverter';

const DetailsContent = ({ data }:InferGetStaticPropsType<typeof getStaticProps>) => {
  const keys:IkeyOfIngredients[] | string[] = Object.keys(vd);
  const filteredKeys = keys.filter((item) => !excludeOfTable.includes(item));
  const bodyTable = () => filteredKeys.map((item) => (`<li>${getByValue(item)}: ${(data.pageData[0][item as IkeyOfIngredients] === '-') ? `${(0).toFixed(2).toString()} ${item.slice(item.lastIndexOf('-')! + 1)}` : `${(parseInt(data.pageData[0][item as IkeyOfIngredients], 10)).toFixed(2)} ${item.slice(item.lastIndexOf('-')! + 1)}`}<li>`));

  const faq = () => filteredKeys.map((item) => {
    function unitNutrient(itemToGetUnit:string) {
      if (itemToGetUnit.slice(itemToGetUnit.lastIndexOf('-')! + 1) === 'mg') { return `quantos miligramas de ${getByValue(item)}`; }
      if (itemToGetUnit.slice(itemToGetUnit.lastIndexOf('-')! + 1) === 'mcg') { return `quantos microgramas de ${getByValue(item)}`; }
      if (itemToGetUnit.slice(itemToGetUnit.lastIndexOf('-')! + 1) === 'kcal') { return 'quantas calorias'; }
      return `quantos gramas de ${getByValue(item)}`;
    }
    return (`,
    {
      "@type": "Question",
      "name": "${data.pageData[0].alimentoEPreparacao} possui ${unitNutrient(item)}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Em média possui <b> ${data.pageData[0][item as keyof typeof data.pageData[0]]} ${item.slice(item.lastIndexOf('-')! + 1)}</b> a cada porção de 100g. <a href=https://www.informacoesnutricionais.com.br/item/${data.pathUrl}>Clique aqui</a> para ver as informações nutricionais completas.</p>"
      }
    }`
    );
  });

  const bodyTb = bodyTable();
  const textBodyTb = bodyTb.join('');
  const faqRes = faq();
  const textFaqRes = faqRes.join('');
  return (
    <>
      <Head>
        <title>{`Informações Nutricionais - ${data.pageData[0].alimentoEPreparacao}`}</title>
        <meta name='description' content={`Conheça todas as informações nutricionais de ${data.pageData[0].alimentoEPreparacao}`} />
        <script type='application/ld+json'>
          {`[
            {
              "@context": "https://schema.org",
              "@type": "NutritionInformation",
              "name": "${data.pageData[0].alimentoEPreparacao}",
              "calories": "${data.pageData[0]['energia-kcal'] === '-' ? '0' : data.pageData[0]['energia-kcal']} calorias",
              "carbohydrateContent": "${data.pageData[0]['carboidrato-g'] === '-' ? '0' : data.pageData[0]['carboidrato-g']} g",
              "cholesterolContent": "${data.pageData[0]['colesterol-mg'] === '-' ? '0' : data.pageData[0]['colesterol-mg']} mg",
              "fatContent": "${data.pageData[0]['lipidiosTotais-g'] === '-' ? '0' : data.pageData[0]['lipidiosTotais-g']} mg",
              "fiberContent": "${data.pageData[0]['fibraTotal-g'] === '-' ? '0' : data.pageData[0]['fibraTotal-g']} g",
              "proteinContent": "${data.pageData[0]['proteina-g'] === '-' ? '0' : data.pageData[0]['proteina-g']} g",
              "saturatedFatContent": "${data.pageData[0]['gorduraSaturados-g'] === '-' ? '0' : data.pageData[0]['gorduraSaturados-g']} g",
              "sodiumContent": "${data.pageData[0]['sodio-mg'] === '-' ? '0' : data.pageData[0]['sodio-mg']} mg",
              "sugarContent": "${data.pageData[0]['acucarTotal-g'] === '-' ? '0' : data.pageData[0]['acucarTotal-g']} g",
              "transFatContent": "${data.pageData[0]['gorduraTransTotal-g'] === '-' ? '0' : data.pageData[0]['gorduraTransTotal-g']} g",
              "unsaturatedFatContent": "${data.pageData[0]['gorduraPolissaturada-g'] + data.pageData[0]['gorduraMonossaturada-g'] === '-' ? '0' : data.pageData[0]['gorduraPolissaturada-g'] + data.pageData[0]['gorduraMonossaturada-g']} g"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "Quais as informações nutricionais de ${data.pageData[0].alimentoEPreparacao}",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "
                    <p>Porção de 100g</p><br>
                    <ul>
                      ${textBodyTb}
                    </ul>
                    "
                }
              }${textFaqRes}
              ]
            }
            ]
          `}
        </script>
      </Head>
      <Box
        display='flex'
        width='90%'
        alignItems='center'
        justifyContent='center'
        mb= '6vw'
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
          <Typography
            component='h1'
            sx={{
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            {data.pageData[0].alimentoEPreparacao}
          </Typography>
          <StickerBox data={data.pageData[0]} />
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
};

export default DetailsContent;
