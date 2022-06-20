import React from 'react';
import Head from 'next/head';
import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Box } from '@mui/material';
import { getStaticProps } from '../../pages';
import { Iingredient } from '../../types';

function HomeContent({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  /* const [selectedElement, setSelectedElement] =
    useState<IobjectState>({ element: 'proteina_g' });
    */
  console.log(data);
  const router = useRouter();

  const handleOnSearch = (string: any, results: any) => {
    console.log(string, results);
  };

  const handleOnHover = (result: any) => {
    console.log(result);
  };

  const handleOnSelect = (item: Iingredient) => {
    console.log(item);
    router.push(`/ingrediente/${item.id}_${item.alimentoEPreparacao.replace(/ /g, '_')}`);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };

  const handleOnClear = () => {
    console.log('Cleared');
  };
  return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDir: 'column',
          width: '100%',
        }}
      >
        <Head>
          <title>Informações Nutricionais</title>
          <meta name="viewport" content="initial-scale=1.0" />
        </Head>
        <Box
          sx={{
            width: '80%',
            marginTop: '30px',
          }}
        >
          <ReactSearchAutocomplete
            items={data.map((item) => item)}
            fuseOptions={{ keys: ['descricaoAlimento', 'preparacao'] }} // Search on both fields
            resultStringKeyName={'alimentoEPreparacao'} // String to display in the results
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            showIcon={true}
          />
        </Box>
      </Box>
  );
}

export default HomeContent;
