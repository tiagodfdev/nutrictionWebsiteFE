/* eslint-disable no-nested-ternary */
import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { getStaticProps } from '../../pages/item/[pathsUrl]';
import DetailsTable from '../DetailsTable';
import StickerBox from '../StickerBox';
import { Iingredient, IkeyOfIngredients } from '../../types';
import vd from '../../utils/consts/vd';
import { excludeOfTable } from '../../config/config';
import { getByValue } from '../../utils/functions/ingredientKeyConverter';

const DetailsContent = ({ data }:InferGetStaticPropsType<typeof getStaticProps>) => {
  const keys:IkeyOfIngredients[] | string[] = Object.keys(vd);
  const filteredKeys = keys.filter((item) => !excludeOfTable.includes(item));
  const pageData = data.pageData as Iingredient;
  const { pageText } = data;
  const bodyTable = () => filteredKeys.map((item) => (`<li>${getByValue(item)}: ${(pageData[item as IkeyOfIngredients] === '-') ? `${(0).toFixed(2).toString()} ${item.slice(item.lastIndexOf('-')! + 1)}` : `${(parseInt(pageData[item as IkeyOfIngredients], 10)).toFixed(2)} ${item.slice(item.lastIndexOf('-')! + 1)}`}<li>`));

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
      "name": "${pageData.alimentoEPreparacao} possui ${unitNutrient(item)}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<p>Em média possui <b> ${pageData[item as keyof typeof pageData]} ${item.slice(item.lastIndexOf('-')! + 1)}</b> a cada porção de 100g. <a href=https://www.informacoesnutricionais.com.br/item/${data.pathUrl}>Clique aqui</a> para ver as informações nutricionais completas.</p>"
      }
    }`
    );
  });
  const splitedText = pageText.split('\n');
  const textToRender = () => {
    const text = splitedText.map((fragment, index) => {
      if (fragment === '') {
        return ('');
      }
      return (<p key={index}>{fragment}</p>);
    });
    return text;
  };
  const bodyTb = bodyTable();
  const textBodyTb = bodyTb.join('');
  const faqRes = faq();
  const textFaqRes = faqRes.join('');
  return (
    <>
      <Head>
        <title>{`Informações Nutricionais - ${pageData.alimentoEPreparacao}`}</title>
        <meta name='description' content={`Conheça todas as informações nutricionais de ${pageData.alimentoEPreparacao}`} />
        <script type='application/ld+json'>
          {`[
            {
              "@context": "https://schema.org",
              "@type": "NutritionInformation",
              "name": "${pageData.alimentoEPreparacao}",
              "calories": "${pageData['energia-kcal'] === '-' ? '0' : pageData['energia-kcal']} calorias",
              "carbohydrateContent": "${pageData['carboidrato-g'] === '-' ? '0' : pageData['carboidrato-g']} g",
              "cholesterolContent": "${pageData['colesterol-mg'] === '-' ? '0' : pageData['colesterol-mg']} mg",
              "fatContent": "${pageData['lipidiosTotais-g'] === '-' ? '0' : pageData['lipidiosTotais-g']} mg",
              "fiberContent": "${pageData['fibraTotal-g'] === '-' ? '0' : pageData['fibraTotal-g']} g",
              "proteinContent": "${pageData['proteina-g'] === '-' ? '0' : pageData['proteina-g']} g",
              "saturatedFatContent": "${pageData['gorduraSaturados-g'] === '-' ? '0' : pageData['gorduraSaturados-g']} g",
              "sodiumContent": "${pageData['sodio-mg'] === '-' ? '0' : pageData['sodio-mg']} mg",
              "sugarContent": "${pageData['acucarTotal-g'] === '-' ? '0' : pageData['acucarTotal-g']} g",
              "transFatContent": "${pageData['gorduraTransTotal-g'] === '-' ? '0' : pageData['gorduraTransTotal-g']} g",
              "unsaturatedFatContent": "${pageData['gorduraPolissaturada-g'] + pageData['gorduraMonossaturada-g'] === '-' ? '0' : pageData['gorduraPolissaturada-g'] + pageData['gorduraMonossaturada-g']} g"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "Quais as informações nutricionais de ${pageData.alimentoEPreparacao}",
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
            {pageData.alimentoEPreparacao}
          </Typography>
          <section>
            {textToRender()}
          </section>
          <StickerBox data={pageData} />
          <Box
            display='flex'
            mb={2}
            width='100%'
            maxWidth='600px'
          >
            <DetailsTable data={pageData} />
          </Box>
        </Box>
    </>
  );
};

export default DetailsContent;
