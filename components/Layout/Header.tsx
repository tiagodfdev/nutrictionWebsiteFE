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
      mt: '5vw',
      mb: '2vw',
      backgroundColor: 'transparent',
      width: '80%',
      cursor: 'pointer',
    }}
  >
    <Link href='/'>
    <a>
      <Box
          sx={{
            display: 'flex',
          }}
      >
          <Logo width='100%' height='100%' />
      </Box>
    </a>
    </Link>
  </Box>
);
export default Header;
