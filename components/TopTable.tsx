import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { Iingredient } from '../types';

interface IProps {
  data:Iingredient[]
}

function generateRows(data:Iingredient[]) {
  const result = data.map((ingredient) => (
    {
      id: ingredient.id,
      url: ingredient.pathUrl,
      col0: ingredient.alimentoEPreparacao,
      col1: `${ingredient['energia-kcal'] !== '-' ? ingredient['energia-kcal'] : 0}kcal`,
      col2: `${ingredient['carboidrato-g'] !== '-' ? ingredient['carboidrato-g'] : 0}g`,
      col3: `${ingredient['proteina-g'] !== '-' ? ingredient['proteina-g'] : 0}g`,
      col4: `${ingredient['lipidiosTotais-g'] !== '-' ? ingredient['lipidiosTotais-g'] : 0}g`,
      col5: `${ingredient['gorduraSaturados-g'] !== '-' ? ingredient['gorduraSaturados-g'] : 0}g`,
      col6: `${ingredient['fibraTotal-g'] !== '-' ? ingredient['fibraTotal-g'] : 0}g`,
      col7: `${ingredient['sodio-mg'] !== '-' ? ingredient['sodio-mg'] : 0}mg`,
      col8: `${ingredient['calcio-mg'] !== '-' ? ingredient['calcio-mg'] : 0}mg`,
      col9: `${ingredient['ferro-mg'] !== '-' ? ingredient['ferro-mg'] : 0}mg`,
      col10: `${ingredient['cobre-mg'] !== '-' ? ingredient['cobre-mg'] : 0}mg`,
      col11: `${ingredient['colesterol-mg'] !== '-' ? ingredient['colesterol-mg'] : 0}mg`,
      col12: `${ingredient['fosforo-mg'] !== '-' ? ingredient['fosforo-mg'] : 0}mg`,
      col13: `${ingredient['magnesio-mg'] !== '-' ? ingredient['magnesio-mg'] : 0}mg`,
      col14: `${ingredient['manganes-mg'] !== '-' ? ingredient['manganes-mg'] : 0}mg`,
      col15: `${ingredient['selenio-mcg'] !== '-' ? ingredient['selenio-mcg'] : 0}mcg`,
      col16: `${ingredient['potassio-mg'] !== '-' ? ingredient['potassio-mg'] : 0}mg`,
      col17: `${ingredient['vitaminaA-mcg'] !== '-' ? ingredient['vitaminaA-mcg'] : 0}mcg`,
      col18: `${ingredient['vitaminaC-mg'] !== '-' ? ingredient['vitaminaC-mg'] : 0}mg`,
      col19: `${ingredient['vitaminaD-mcg'] !== '-' ? ingredient['vitaminaD-mcg'] : 0}mcg`,
      col20: `${ingredient['vitaminaE-mg'] !== '-' ? ingredient['vitaminaE-mg'] : 0}mg`,
      col21: `${ingredient['zinco-mg'] !== '-' ? ingredient['zinco-mg'] : 0}mg`,
    }));
  return result;
}

// eslint-disable-next-line no-unused-vars
export default function TopTable(props:IProps) {
  const { data } = props;
  const rows: GridRowsProp = generateRows(data);

  const columns: GridColDef[] = [
    {
      field: 'col0',
      headerName: 'Alimento',
      width: 150,
      renderCell: (params) => <Link passHref href={`/item/${params.row.url}`}><a style={{ color: 'inherit' }}>{params.row.col0}</a></Link>,
    },
    { field: 'col1', headerName: 'Calorias', width: 150 },
    { field: 'col2', headerName: 'Carboidratos', width: 150 },
    { field: 'col3', headerName: 'Proteína', width: 150 },
    { field: 'col4', headerName: 'Gorduras Totais', width: 150 },
    { field: 'col5', headerName: 'Gordura Saturados', width: 150 },
    { field: 'col6', headerName: 'Fibra Total', width: 150 },
    { field: 'col7', headerName: 'Sódio', width: 150 },
    { field: 'col8', headerName: 'Cálcio', width: 150 },
    { field: 'col9', headerName: 'Ferro', width: 150 },
    { field: 'col10', headerName: 'Cobre', width: 150 },
    { field: 'col11', headerName: 'Colesterol', width: 150 },
    { field: 'col12', headerName: 'Fósforo', width: 150 },
    { field: 'col13', headerName: 'Magnésio', width: 150 },
    { field: 'col14', headerName: 'Manganês', width: 150 },
    { field: 'col15', headerName: 'Selênio', width: 150 },
    { field: 'col16', headerName: 'Potássio', width: 150 },
    { field: 'col17', headerName: 'Vitamina A', width: 150 },
    { field: 'col18', headerName: 'Vitamina C', width: 150 },
    { field: 'col19', headerName: 'Vitamina D', width: 150 },
    { field: 'col20', headerName: 'Vitamina E', width: 150 },
    { field: 'col21', headerName: 'Zinco', width: 150 },
  ];
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 'auto', width: '100%',
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          borderLeft: '1px solid #e0e0e0',
          borderRight: '1px solid #e0e0e0',
          borderTop: '1px solid #e0e0e0',
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      >
        <Typography>Porção de 100g</Typography>
      </Box>
      <DataGrid
      sx={{ borderTopRightRadius: 0, borderTopLeftRadius: 0, width: '100%' }}
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </Box>
  );
}
