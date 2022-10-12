import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import LogoFooter from '../../assets/LogoFooter';

const Footer = () => <Box component={'footer'}
sx={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#3d3d3d',
  width: '100%',
  px: 1,
}}
>
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      mt: 2,
    }}
  >
    <Typography color='#999' marginY={0.5}>
      Fontes:&nbsp;
    </Typography>
    <a target='_blank' style={{ color: '#999' }} href="https://www.ibge.gov.br/" rel="noreferrer">IBGE</a>
    <Typography color='#999' marginY={0.5}>
      ,&nbsp;
    </Typography>
    <a target='_blank' style={{ color: '#999' }} href="https://bvsms.saude.gov.br/" rel="noreferrer">Ministério da Saúde</a>
  </Box>
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '12vw',
      height: '12vw',
      maxWidth: '60px',
      maxHeight: '60px',
      mt: 3,
    }}
  >
    <LogoFooter stroke='white' fill='white' />
  </Box>

  <Typography color='white' marginY={0.5}>
    {new Date().getFullYear()}&nbsp;&copy;&nbsp;All rights reserved
  </Typography>
  <Typography color='#999' marginY={0.5}>
    Desenvolvido por: <Link href='mailto:tiagodfdev@gmail.com?subject=Vamos trabalhar juntos?&body=Olá Tiago, gostaria de saber como estabelecer contato com você, meu telefone é:' color='inherit' target='_blank'>@tiagodfdev</Link>
  </Typography>
</Box>;

export default Footer;
