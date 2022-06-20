import { Box } from '@mui/material';
import React from 'react';
import { PageProps } from '../../types';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function Layout({ children }:PageProps) {
  return (
       <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: "url('images/background15.jpg')",
          }}
        >
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </Box>
  );
}
export default Layout;
