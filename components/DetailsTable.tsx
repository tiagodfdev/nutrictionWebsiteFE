/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import {
  Box,
  InputAdornment,
  OutlinedInput,
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import router from 'next/router';
import { excludeOfTable } from '../config/config';
import { Iingredient, IkeyOfIngredients } from '../types';
import vd from '../utils/consts/vd';
import { getByValue } from '../utils/functions/ingredientKeyConverter';
import nutrientKeyConverter from '../utils/functions/getNutrientUrlByValue';

interface IProps {
  data:Iingredient
}

const DetailsTable = ({ data }:IProps) => {
  const [inputValue, setInputValue] = useState('100');
  const [selectedValue, setSelectedValue] = useState('100');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value.match('\\D')) {
      setInputValue(event.target.value);
    }
  };

  const handleUrlNutrient = (url:string) => router.push(`/nutriente/${url}`);

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
  const rowData = (data);
  const keys:IkeyOfIngredients[] | string[] = Object.keys(vd);
  const bodyTable = () => keys.map((item) => {
    if (excludeOfTable.includes(item)) { return null; }
    return (
        <TableRow
          key={item} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
          <TableCell component="th" scope="row" align='left'>
            {nutrientKeyConverter(item as IkeyOfIngredients)
              ? <p
              style={{
                fontWeight: 400,
                fontSize: '0.875rem',
                lineHeight: '1.43',
                display: 'table-cell',
                verticalAlign: 'inherit',
                textAlign: 'left',
                padding: '0px',
                color: 'rgba(0, 0, 0, 0.87)',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
              onClick={() => handleUrlNutrient(nutrientKeyConverter(item as IkeyOfIngredients)!)}
            >
              {getByValue(item)}
            </p>
              : getByValue(item)}
          </TableCell>
          <TableCell component="th" scope="row" align='center'>
            {(rowData[item as IkeyOfIngredients] === '-') ? `${(0).toFixed(2).toString()} ${item.slice(item.lastIndexOf('-')! + 1)}` : `${(parseFloat(rowData[item as IkeyOfIngredients]) * (parseInt(selectedValue, 10) / 100)).toFixed(2)} ${item.slice(item.lastIndexOf('-')! + 1)}`}
          </TableCell>
          <TableCell component="th" scope="row" align='center'>
            {(parseInt(vd[item as IkeyOfIngredients], 10) === 0)
              ? '**'
              : ((rowData[item as IkeyOfIngredients]) !== '-')
                ? `${((((parseInt(rowData[item as IkeyOfIngredients], 10) * (parseInt(selectedValue, 10) / 100)) / parseFloat(vd[item as IkeyOfIngredients])) * 100)).toFixed(2)}%`
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
              borderRadius: 4,
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
            background: 'transparent',
            border: '1px solid #e0e0e0',
            borderRadius: 1,
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
        <Typography ml={2} mt={5} fontSize={10} >
          * Valores diários de reeferência com base em uma dieta de 2000kcal ou 8400kJ.
          Seus valores diários podem ser maiores ou menores
          dependendo de suas necessidades energéticas.
        </Typography>
        <Typography ml={2} mb={2} fontSize={10} >
          ** VD não estabelecido
        </Typography>
      </TableContainer>
    </Box>
  );
};

export default DetailsTable;
