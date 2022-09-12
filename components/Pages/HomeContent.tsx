import { Box } from '@mui/material';
import React from 'react';
import { keys } from '../../utils/consts/ingredientMap';
import CheckToInput from '../CheckToInput';
import FilterDropdown from '../FilterDropdown';
import MainLayout from '../Layout/MainLayout';
import SearchBar, { ISearchBarProps } from '../SearchBar';
import TopTable from '../TopTable';

function HomeContent(props:ISearchBarProps) {
  const { data } = props;
  return (
    <>
      <Box
        display='flex'
        width='90%'
      >
        <SearchBar data={data} />
      </Box>
      <MainLayout>
      <Box
          display='flex'
          flexDirection='column'
          width='90%'
          alignItems='flex-start'
        >
        <Box
          display='flex'
          flexDirection='column'
          width='100%'
          alignItems='flex-start'
          gap={1}
          marginBottom={2}
        >
          <FilterDropdown items={keys} />
          <CheckToInput id='Lipídios Totais' label='Limitar gorduras' />
          <CheckToInput id='Calorias' label='Limitar calorias' />
        </Box>
        <Box
          display='flex'
          width='100%'
          mb={2}
        >
          <TopTable data={data} />
        </Box>
        </Box>
      </MainLayout>
    </>
  );
}

export default HomeContent;
