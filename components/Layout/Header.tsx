import React from 'react';
import { Box } from '@mui/material';
import Logo from '../../assets/Logo';

const Header = () => (
  <Box
    component={'header'}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      mt: '1rem',
      backgroundColor: 'transparent',
    }}
  >
    <Box
        sx={{
          display: 'flex',
        }}
    >
        <Logo width='100%' height='100%' />
    </Box>
  </Box>
);
export default Header;
