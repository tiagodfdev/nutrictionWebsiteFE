import { Box, SvgIcon } from '@mui/material';
import React from 'react';
import { PageProps } from '../../types';

const MainLayout = ({ children }:PageProps) => (
    <>
        <SvgIcon
            viewBox="0 0 319 60"
            sx={{
              width: '100%',
              height: 'auto',
              color: 'primary.main',
            }}>
            <path
                fillOpacity="1"
                d="M162.333 31.6667C209.852 22.7569 246.989 33.2164 319 60V0H-1C28.1858 16.8811 100.579 43.2456 162.333 31.6667Z"
            >
            </path>
        </SvgIcon>
        <Box
            component={'main'}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: 'auto',
              background: 'transparent',
              pt: '3vw',
            }}
        >
            {children}
        </Box>
</>
);

export default MainLayout;
