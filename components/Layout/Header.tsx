import React from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import Logo from '../../assets/Logo';

const Header = () => (
  <Box
    component={'header'}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      mt: 1,
      mb: 2,
      backgroundColor: 'transparent',
      width: '80%',
    }}
  >
    <Link href='/'>
    <Box
        sx={{
          display: 'flex',
        }}
    >
        <Logo width='100%' height='100%' />
    </Box>
    </Link>
  </Box>
);
export default Header;
