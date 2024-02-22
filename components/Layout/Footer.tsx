import { Box, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = () => <Box component={'footer'}
sx={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  width: '100%',
}}
>
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mt: 5,
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
    <Typography color='#999' marginY={0.5}>
      ,&nbsp;
    </Typography>
    <a target='_blank' style={{ color: '#999' }} href="https://www.scielo.br/" rel="noreferrer">Scielo</a>
    <Typography color='#999' marginY={0.5}>
      ,&nbsp;
    </Typography>
    <a target='_blank' style={{ color: '#999' }} href="https://www.sibbr.gov.br/" rel="noreferrer">SibBR</a>
    <Typography color='#999' marginY={0.5}>
      ,&nbsp;
    </Typography>
    <a target='_blank' style={{ color: '#999' }} href="https://www.usda.gov/" rel="noreferrer">USDA</a>
  </Box>
  <Typography color='#999' marginY={0.5}>
    &nbsp;&copy;&nbsp;{new Date().getFullYear()} informacoesnutricionais.com.br
  </Typography>
  <Typography color='#999' marginY={0.5}>
    Desenvolvido por: <Link href='mailto:tiagodfdev@gmail.com?subject=Vamos trabalhar juntos?&body=Olá Tiago, gostaria de saber como estabelecer contato com você, meu telefone é:' color='inherit' target='_blank'>@tiagodfdev</Link>
  </Typography>
</Box>;

export default Footer;
