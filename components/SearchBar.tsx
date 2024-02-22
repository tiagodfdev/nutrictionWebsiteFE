/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Autocomplete,
  Box, TextField, useTheme,
} from '@mui/material';
import { ISearchBarData } from '../types';
import searchBarData from '../utils/consts/searchBarData';

export interface ISearchBarProps {
  data:ISearchBarData[]
}

const data = searchBarData;
function SearchBar() {
  const theme = useTheme();
  const router = useRouter();
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [openStatus, setOpenStatus] = useState(false);

  const handleOnSelect = (item: string) => {
    setInputValue('');
    setValue(null);
    setOpenStatus(false);
    if (document.activeElement) {
      (document.activeElement as HTMLElement).blur();
    }
    router.push(`/item/${item}`);
  };

  function handleOnMouseOver(event:React.MouseEvent<HTMLParagraphElement, MouseEvent>) {
    (event.target as HTMLParagraphElement).style.transition = 'background 0.5s';
    (event.target as HTMLParagraphElement).style.background = '#dedede';
  }
  function handleOnMouseLeave(event:React.MouseEvent<HTMLParagraphElement, MouseEvent>) {
    (event.target as HTMLParagraphElement).style.background = 'transparent';
  }
  const options = data.map((item: ISearchBarData) => {
    const result = { label: item.alimentoEPreparacao, id: item.pathUrl };
    return result;
  });
  function getKeyfromOption(optionPassed:string) {
    const foundObj = options.filter((option) => option.label === optionPassed);
    return foundObj[0].id;
  }
  return (
    <Box
        display='flex'
        width='100%'
        alignItems='center'
        justifyContent='center'
      >
      <Box
        sx={{
          width: '100%',
          zIndex: 1,
          maxWidth: '600px',
          '& li': {
            cursor: 'pointer',
          },
        }}
      >
        <Autocomplete
          value={value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          disablePortal
          clearOnEscape
          onBlur={() => setOpenStatus(false)}
          id="searchFood"
          options={options.map((option) => option.label)}
          size='small'
          sx={{
            width: '100%',
            color: theme.palette.text.primary,
            bgcolor: 'white',
            border: '1px solid #e0e0e0',
            '& .Mui-focused': {
              color: '#000000DE !important',
              backgroundColor: 'transparent',
            },
          }}
          open={openStatus}
          onOpen={() => setOpenStatus(true)}
          getOptionKey={(option) => getKeyfromOption(option)}
          renderInput={(params) => <TextField {...params} label="Pesquise por um alimento..." />}
          renderOption={(props, option) => <li><p
              onClick={() => handleOnSelect(
                props['key' as keyof React.HTMLAttributes<HTMLLIElement>],
              )}
              onMouseOver={handleOnMouseOver}
              onMouseLeave={handleOnMouseLeave}
              style={{
                listStyle: 'none',
                cursor: 'pointer',
                minHeight: 'auto',
                display: 'flex',
                overflow: 'hidden',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingTop: '6px',
                boxSizing: 'border-box',
                outline: 0,
                WebkitTapHighlightColor: 'transparent',
                paddingBottom: '6px',
                paddingLeft: '16px',
                paddingRight: '16px',
                margin: 0,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {option}
            </p></li>
          }
    />
      </Box>
    </Box>
  );
}

export default SearchBar;
