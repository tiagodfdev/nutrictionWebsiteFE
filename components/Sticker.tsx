import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

interface IProps {
    label: string,
    healty: 'good' | 'bad',
}

const Sticker = (props:IProps) => {
  const theme = useTheme();
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      sx={ {
        backgroundColor: props.healty === 'good' ? theme.palette.primary.main : theme.palette.secondary.main,
        border: props.healty === 'good' ? '1px solid rgb(0, 51, 0)' : '1px solid rgb(51, 0, 0)',
        px: '0.2rem',
        mx: '0.2rem',
        borderRadius: 16,
      } }
    >
      <Typography lineHeight={0.9} fontSize='0.6rem' color={props.healty === 'good' ? 'rgb(0, 51, 0)' : 'rgb(51, 0, 0)'}>
        {props.label}
      </Typography>
    </Box>);
};
export default Sticker;
