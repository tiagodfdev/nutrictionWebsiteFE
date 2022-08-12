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
      <SearchBar data={data} />
      <MainLayout>
        <FilterDropdown items={keys} />
        <CheckToInput id='Lipídios Totais' label='Limitar gorduras' />
        <CheckToInput id='Calorias' label='Limitar calorias' />
        <TopTable data={data} />
      </MainLayout>
    </>
  );
}

export default HomeContent;
