import { Box } from '@mui/material';
import React from 'react';
import { PageProps } from '../../types';

function Main({ children }:PageProps) {
  return (
        <Box
            component={'main'}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
        >
            {children}
        </Box>
  );
}
export default Main;
