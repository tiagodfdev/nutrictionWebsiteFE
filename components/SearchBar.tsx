import React from 'react';
import { useRouter } from 'next/router';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Box } from '@mui/material';
import { Iingredient } from '../types';

export interface ISearchBarProps {
  data:Iingredient[]
}
function SearchBar(props:ISearchBarProps) {
  const { data } = props;
  const router = useRouter();

  const handleOnSelect = (item: Iingredient) => {
    router.push(`/item/${item.pathUrl}`);
  };
  return (
    <Box
      sx={{
        width: '100%',
        zIndex: 1,
      }}
    >
      <ReactSearchAutocomplete
        items={data.map((item: Iingredient) => item)}
        fuseOptions={{ keys: ['descricaoAlimento'] }} // Search on both fields
        resultStringKeyName={'alimentoEPreparacao'} // String to display in the results
        onSelect={handleOnSelect}
        placeholder=""
        showIcon={true}
        styling={{
          height: '42px',
          color: '#000',
          backgroundColor: 'white',
          boxShadow: '0px 3px 8px 4px rgba(0, 0, 0, 0.05)',
        }}
      />
    </Box>
  );
}

export default SearchBar;
