import { Box, List, ListItem, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { Iingredient, ISearchBarData } from '../../types';
import TopTable from '../TopTable';

interface IProps {
  data:{
    allData:Iingredient[],
    searchBarData:ISearchBarData[]
  }
}
function HomeContent(props:IProps) {
  const { data } = props;
  return (
    <>
      <Head>
        <title>Informações Nutricionais</title>
        <meta name='description' content='Encontre as informações nutricionais referentes a maioria dos alimentos consumidos pelos brasileiros e brasileiras' />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1409030227834955"
     crossOrigin="anonymous"></script>
        <script type='application/ld+json'>
          {`[
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://www.informacoesnutricionais.com.br/",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.informacoesnutricionais.com.br/item/{search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                  "@type": "Question",
                  "name": "Onde encontrar as informações nutricionais dos alimentos mais consumidos pelos brasileiros?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "<p>No site <a href=https://www.informacoesnutricionais.com.br>https://www.informacoesnutricionais.com.br</a> você pode encontrar as informações dos principais alimentos consumidos no Brasil</p>"
                  }
                }]
              }
            ]
          `}
        </script>
      </Head>
        <Box
          display='flex'
          flexDirection='column'
          width='90%'
          alignItems='flex-start'
          maxWidth='600px'
        >
          <Box 
          mb={3}>
            <Typography>
            Descubra o poder da alimentação para uma vida mais saudável!
            </Typography>
            <br />
            <Typography>
            No Informação Nutricional, você encontra tudo o que precisa saber sobre os alimentos que consome. Nossa missão é oferecer informações claras, confiáveis e atualizadas sobre nutrição, ajudando você a fazer escolhas mais saudáveis e alcançar seus objetivos de bem-estar.
            </Typography>
            <br />
            <Typography>
            Nossas informações são baseadas em dados de fontes confiáveis como o IBGE, Ministério da Saúde e USDA, garantindo a precisão e a qualidade das informações que você encontra aqui.
            </Typography>
            <br />
            <List
              disablePadding
              aria-label={'Explore nosso site e encontre:'}
              sx={{
                display: 'block',
                listStyleType: 'disc',
                marginBlockStart: '1em',
                marginBlockEnd: '1em',
                marginInlineStart: '0px',
                marginInlineEnd: '0px',
                '&::before': { content: 'attr(aria-label)' },
              }}>
                <ListItem>Tabelas nutricionais completas: Conheça o valor nutricional de centenas de alimentos.</ListItem>
                <ListItem>Informações específicas: Informe-se sobre o funcionamento e os benefícios de cada nutriente no seu corpo.</ListItem>
              </List>
              
              <Typography>
                Sua saúde é nossa prioridade!
              </Typography>
          </Box>
          <Box
            display='flex'
            width='100%'
            mb={2}
          >
            <TopTable data={data.allData} />
          </Box>
        </Box>
    </>
  );
}

export default HomeContent;
