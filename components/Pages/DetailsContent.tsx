/* eslint-disable no-nested-ternary */
import React from 'react';
import { InferGetStaticPropsType } from 'next';
import { Box, Typography } from '@mui/material';
import { getStaticProps } from '../../pages/item/[pathsUrl]';
import DetailsTable from '../DetailsTable';
import MainLayout from '../Layout/MainLayout';
import SearchBar from '../SearchBar';

const DetailsContent = ({ data }:InferGetStaticPropsType<typeof getStaticProps>) => (
    <>
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
