/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import {
  Box,
  InputAdornment,
  OutlinedInput,
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import { excludeOfTable } from '../config/config';
import { Iingredient, IkeyOfIngredients } from '../types';
import vd from '../utils/consts/vd';
import { getByValue } from '../utils/features/ingredientKeyConverter';

interface IProps {
  data:Iingredient[]
}

const DetailsTable = ({ data }:IProps) => {
  const [inputValue, setInputValue] = useState('100');
  const [selectedValue, setSelectedValue] = useState('100');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value.match('\\D')) {
      setInputValue(event.target.value);
    }
  };

  const handleInputContent = () => {
    if ((inputValue.length !== 0)) {
      if (inputValue !== '0') {
        setSelectedValue(inputValue);
      } else {
        setInputValue('1');
        setSelectedValue('1');
      }
    } else {
      setInputValue('1');
      setSelectedValue('1');
    }
  };
  const rowData = (data[0]);
  const keys:IkeyOfIngredients[] | string[] = Object.keys(vd);
  const bodyTable = () => keys.map((item) => {
    if (excludeOfTable.includes(item)) { return null; }
    return (
        <TableRow
          key={item} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
          <TableCell component="th" scope="row" align='left'>
            {getByValue(item)}
          </TableCell>
          <TableCell component="th" scope="row" align='center'>
            {(rowData[item as IkeyOfIngredients] === '-') ? `${(0).toFixed(2).toString()} ${item.slice(item.lastIndexOf('-')! + 1)}` : `${(parseInt(rowData[item as IkeyOfIngredients], 10) * (parseInt(selectedValue, 10) / 100)).toFixed(2)} ${item.slice(item.lastIndexOf('-')! + 1)}`}
          </TableCell>
          <TableCell component="th" scope="row" align='center'>
            {(parseInt(vd[item as IkeyOfIngredients], 10) === 0) ? '**'
              : ((rowData[item as IkeyOfIngredients]) !== '-')
                ? `${((((parseInt(rowData[item as IkeyOfIngredients], 10) * (parseInt(selectedValue, 10) / 100)) / parseInt(vd[item as IkeyOfIngredients], 10)) * 100)).toFixed(2)}%`
                : `${(0).toFixed(2)}%`
            }
          </TableCell>
        </TableRow>
    );
  });
  return (
    <Box
      display='flex'
      width='100%'
      flexDirection='column'
    >
      <Box
        display='flex'
        width='100%'
        alignItems='center'
        justifyContent='center'
        mb={2}
      >
        <Typography>
          Porção
        </Typography>
        <Box
          display='flex'
          width='20vw'
          maxWidth='85px'
        >
          <OutlinedInput
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            endAdornment={<InputAdornment position="end">g</InputAdornment>}
            value={inputValue}
            sx={{
              px: '5px',
              transition: 'background-color 0.1s',
              borderRadius: 16,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              height: '32px',
              ml: '5px',
            }}
            onKeyDown = {(e) => {
              if (e.key === 'Enter') {
                handleInputContent();
              }
            }}
            onBlur = {handleInputContent}
            onChange = {handleInputChange}
          />
        </Box>
      </Box>
      <TableContainer
          sx={{
            width: '100%',
            background: 'rgba(255,255,255,0.1)',
            boxShadow: '0px 3px 8px 4px rgba(0, 0, 0, 0.08)',
            borderRadius: 6,
            backdropFilter: 'blur(23px)',
          }}
          component={Paper}
      >
          <Table
              sx={{
                minWidth: 300,
              }}
              size="small"
              aria-label="tabela de nutrientes"
          >
          <TableHead sx={{ color: 'red' }}>
            <TableRow>
              <TableCell align='left' colSpan={2}><strong>Quantidade por porção</strong></TableCell>
              <TableCell align='center' colSpan={3}><strong>%VD*</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bodyTable()}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DetailsTable;
