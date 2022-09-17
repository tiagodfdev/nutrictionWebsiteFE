import { Box } from '@mui/material';
import React from 'react';
import { Iingredient, ISearchBarData } from '../../types';
import { keys } from '../../utils/consts/ingredientMap';
import CheckToInput from '../CheckToInput';
import FilterDropdown from '../FilterDropdown';
import MainLayout from '../Layout/MainLayout';
import SearchBar from '../SearchBar';
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
            alignItems='flex-start'
            maxWidth='600px'
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
            <TopTable data={data.allData} />
          </Box>
        </Box>
      </MainLayout>
    </>
  );
}

export default HomeContent;
