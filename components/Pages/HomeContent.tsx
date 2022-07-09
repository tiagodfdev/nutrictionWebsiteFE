import React from 'react';
import { keys } from '../../utils/consts/ingredientMap';
import CheckToInput from '../CheckToInput';
import FilterDropdown from '../FilterDropdown';
import SearchBar, { ISearchBarProps } from '../SearchBar';

function HomeContent(props:ISearchBarProps) {
  const { data } = props;
  return (
    <>
      <SearchBar data={data} />
      <FilterDropdown items={keys} />
      <CheckToInput id='gorduras' label='Limitar gorduras' />
      <CheckToInput id='calorias' label='Limitar calorias' />
    </>
  );
}

export default HomeContent;
