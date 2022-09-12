import { Box, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = () => <Box component={'footer'}
sx={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#3d3d3d',
  width: '100%',
  borderRadius: -2,
}}
>
  <Typography color='white' marginY={0.5}>
    &copy; <Link href='mailto:tiagodfdev@gmail.com?subject=Vamos trabalhar juntos?&body=Olá Tiago, gostaria de saber como estabelecer contato com você, meu telefone é:' color='inherit' target='_blank'>tiagodfdev</Link> {new Date().getFullYear()}
  </Typography>
</Box>;

export default Footer;
