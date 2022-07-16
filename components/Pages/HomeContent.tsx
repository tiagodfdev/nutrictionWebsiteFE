import React from 'react';
import { keys } from '../../utils/consts/ingredientMap';
import CheckToInput from '../CheckToInput';
import FilterDropdown from '../FilterDropdown';
import MainLayout from '../Layout/MainLayout';
import SearchBar, { ISearchBarProps } from '../SearchBar';

function HomeContent(props:ISearchBarProps) {
  const { data } = props;
  return (
    <>
      <SearchBar data={data} />
      <MainLayout>
        <FilterDropdown items={keys} />
        <CheckToInput id='gorduras' label='Limitar gorduras' />
        <CheckToInput id='calorias' label='Limitar calorias' />
      </MainLayout>
    </>
  );
}

export default HomeContent;
