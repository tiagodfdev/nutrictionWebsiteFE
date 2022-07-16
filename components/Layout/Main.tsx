import { Box } from '@mui/material';
import React from 'react';
import { PageProps } from '../../types';

const Main = ({ children }:PageProps) => (
    <Box
        component={'main'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
        }}
    >
        {children}
    </Box>
);
export default Main;
