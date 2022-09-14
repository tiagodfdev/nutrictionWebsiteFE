/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import { excludeOfTable } from '../config/config';
import { Iingredient, IkeyOfIngredients } from '../types';
import vd from '../utils/consts/vd';
import { getByValue } from '../utils/features/ingredientKeyConverter';

interface IProps {
  data:Iingredient[]
}

const DetailsTable = ({ data }:IProps) => {
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
            {(rowData[item as IkeyOfIngredients] === '-') ? `${(0).toFixed(2).toString()} ${item.slice(item.lastIndexOf('-')! + 1)}` : `${rowData[item as IkeyOfIngredients]} ${item.slice(item.lastIndexOf('-')! + 1)}`}
          </TableCell>
          <TableCell component="th" scope="row" align='center'>
            {(parseInt(vd[item as IkeyOfIngredients], 10) === 0) ? '**'
              : ((rowData[item as IkeyOfIngredients]) !== '-')
                ? `${((parseInt(rowData[item as IkeyOfIngredients], 10) / parseInt(vd[item as IkeyOfIngredients], 10)) * 100).toFixed(2)}%`
                : `${(0).toFixed(2)}%`
            }
          </TableCell>
        </TableRow>
    );
  });
  return (
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
              <TableCell align='left' colSpan={2}><strong>Quantidade por porção (100g)</strong></TableCell>
              <TableCell align='center' colSpan={3}><strong>%VD*</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bodyTable()}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default DetailsTable;
