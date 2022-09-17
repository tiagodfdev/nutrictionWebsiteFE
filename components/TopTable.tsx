import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { RootState } from '../redux/store';
import ingredientKeyConverter from '../utils/features/ingredientKeyConverter';
import sortElements, { IorderDirection } from '../utils/features/sortElements';
import { Iingredient, IkeyOfIngredients } from '../types';
import LinkIcon from '../assets/linkIcon';

function createData(
  name: string,
  amount: string,
  url: string,
) {
  return {
    name, amount, url,
  };
}
interface IProps {
  data:Iingredient[]
}

export default function TopTable(props:IProps) {
  const filters = useSelector((state: RootState) => state.filterStates);
  const { data } = props;
  const parseProps = {
    data,
    ingredient: (ingredientKeyConverter(filters[0].value as string)!) ? ingredientKeyConverter(filters[0].value! as string)! : 'proteina_g' as IkeyOfIngredients,
    limiters: filters.slice(1, filters.length),
    order: 'descending' as IorderDirection,
  };
  let elements = sortElements(parseProps);
  elements = elements.slice(0, 10);
  const rows = elements.map((element) => createData(
    element.alimentoEPreparacao, element[parseProps.ingredient], element.pathUrl,
  ));
  const tableRender = () => {
    if (rows.length === 0) {
      return (
        <TableRow
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {'Sem dados para exibição'}
          </TableCell>
        </TableRow>
      );
    }
    return (
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            hover={true}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
          >
            <TableCell component="th" scope="row">
              <Link href={`item/${row.url}`}>
                <a style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography>
                    {row.name}
                  </Typography>
                </a>
              </Link>
            </TableCell>
            <TableCell align="right">
             <Link href={`item/${row.url}`}>
                <a style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography>
                    {row.amount}&nbsp; <LinkIcon width={10} height={10} />
                  </Typography>
                </a>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  };
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
            <TableCell><strong>Alimento (porção 100g)</strong></TableCell>
            <TableCell align="right"><strong>{filters[0].value}&nbsp;{ingredientKeyConverter(filters[0].value as string)?.slice(ingredientKeyConverter(filters[0].value as string)?.lastIndexOf('-')! + 1)}</strong></TableCell>
          </TableRow>
        </TableHead>
        {tableRender()}
      </Table>
    </TableContainer>
  );
}
