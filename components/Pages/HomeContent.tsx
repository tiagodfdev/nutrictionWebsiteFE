import { Box } from '@mui/material';
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
