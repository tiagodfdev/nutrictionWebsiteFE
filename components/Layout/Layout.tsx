import { Box } from '@mui/material';
import React from 'react';
import { PageProps } from '../../types';
import Footer from './Footer';
import MainLayout from './MainLayout';
import Header from './Header';

function Layout({ children }:PageProps) {
  return (
       <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(157deg, #FFF7F1 18.07%, #F3FFF1 100%)',
          }}
        >
          <Header />
            <MainLayout>
                {children}
            </MainLayout>
            <Footer />
        </Box>
  );
}
export default Layout;
