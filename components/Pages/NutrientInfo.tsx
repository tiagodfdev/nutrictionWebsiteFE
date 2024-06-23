/* eslint-disable no-nested-ternary */
/* eslint-disable semi */
import React from 'react';
import { InferGetStaticPropsType } from 'next';
import {
  Box, List, ListItem, Typography,
} from '@mui/material';
import Head from 'next/head';
import { getStaticProps } from '../../pages/nutriente/[pathsUrlNutrient]';
import { NutrientDB } from '../../types';
import dbToSchemaFAQObj from '../../utils/schemaDts/dbToNutrientObj';
import SchemaFAQ from '../../utils/schemaDts/SchemaFAQ';

const NutrientInfo = ({ data }:InferGetStaticPropsType<typeof getStaticProps>) => {
  const pageData = data.pageData as NutrientDB;
  const allFaqs = dbToSchemaFAQObj(pageData);
  const FaqString = new SchemaFAQ().insertFAQ(allFaqs);
  const novegRender = () => <List
  disablePadding
  aria-label={pageData.topics[1].foods.novegan.length !== 0 ? 'Das opções de origem animal, temos:' : ''}
  sx={{
    display: 'block',
    listStyleType: 'disc',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    paddingInlineStart: '40px',
    '&::before': { content: 'attr(aria-label)' },
  }}>
    {pageData.topics[1].foods.novegan.map((food) => <ListItem key={food} sx={ { padding: 0, display: 'list-item' } }>
    { food }
  </ListItem>) }
</List>
  const vegRender = () => <List
      disablePadding
      aria-label={pageData.topics[1].foods.vegan.length !== 0 ? 'Das opções de origem vegetal, temos:' : '' }
      sx={{
        display: 'block',
        listStyleType: 'disc',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        paddingInlineStart: '40px',
        '&::before': { content: 'attr(aria-label)' },
      }}>
        {pageData.topics[1].foods.vegan.map((food) => <ListItem key={food} sx= { { padding: 0, display: 'list-item' } }>
        { food }
      </ListItem>) }
    </List>
  const refRender = () => <>
  <p>Referências:</p>
    <ul>
      { pageData.references.map((ref) => <li key={ref}>{ ref }</li>) }
    </ul>
  </>;
  const listPros = () => <ul>
    { pageData.topics[0].pros.map((pro) => <li key={pro}>{ pro }</li>) }
  </ul>;
  const listCons = () => <ul>
    { pageData.topics[0].cons.map((con) => <li key={con}>{ con }</li>) }
  </ul>;
  return (
    <>
      <Head>
        <title>{`Informações Nutricionais - ${pageData.title}`}</title>
        <meta name='description' content={ `Saiba tudo sobre ${pageData.title.slice(0, pageData.title.indexOf(':'))}, benefícios, malefícios e quantidades recomendadas de ingestão.`} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1409030227834955"
     crossOrigin="anonymous"></script>
        <script type='application/ld+json'>
          {`[
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                ${FaqString}
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
          component='section'
        >
          <Typography
            component='h1'
            sx={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {pageData.title}
          </Typography>
          <Typography
          sx={{
            color: 'rgba(0, 0, 0, 0.50)',
            mb: 10,
            textAlign: 'center',
          }}
          >
            {pageData.intro}
          </Typography>
          <Box
            display='flex'
            flexDirection='column'
            width='100%'
            alignItems='start'
          >
          <Typography
          component='h2'
          sx={{
            mb: 4,
            fontWeight: 'bold',
          }}
          >
            {pageData.topics[0].subtitle}
          </Typography>
          <Typography
          >
            {pageData.topics[0].description}
          </Typography>
          <Box
          >
            {listPros()}
          </Box>
          <Typography
          >
            Embora este nutriente seja vital para o bom funcionamento do corpo,
             é importante estar atento: o consumo excessivo pode trazer problemas, como:
          </Typography>
          <Box
          >
            {listCons()}
          </Box>
          <Typography
          sx={{
            mb: 8,
          }}
          >
            {pageData.topics[0].recommended_amout}
          </Typography>
          <Typography
          component='h2'
          sx={{
            mb: 4,
            fontWeight: 'bold',
          }}
          >
            {pageData.topics[1].subtitle}
          </Typography>
          <Typography
          >
            {pageData.topics[1].description}
          </Typography>
          <Box
          >
            {novegRender()}
          </Box>
          <Box
          >
            {vegRender()}
          </Box>
          <Typography
          sx={{
            mb: 10,
          }}
          >
            {pageData.conclusion}
          </Typography>
          <Box
          sx={{
            color: 'rgba(0, 0, 0, 0.50)',
          }}
          >
            {refRender()}
          </Box>
          </Box>
        </Box>
    </>
  );
};

export default NutrientInfo;
