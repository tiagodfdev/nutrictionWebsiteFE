import { Box } from '@mui/material';
import React from 'react';
import { PageProps } from '../../types';

const MainLayout = ({ children }:PageProps) => (
    <Box
        display='flex'
        flexDirection='column'
        width='100%'
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 29.9">
            <defs>
            <linearGradient id='grad1' x1="0%" y1="0%" x2="100%" y2="0%" >
                <stop offset="0%" stopColor='rgb(32, 73, 7)' stopOpacity="30%" />
                <stop offset="100%" stopColor='rgb(232, 135, 30)' stopOpacity="30%" />
            </linearGradient>
            <filter id='shadow' colorInterpolationFilters="sRGB">
                <feDropShadow dx='0' dy='-4' stdDeviation='3' floodOpacity='0.5' />
            </filter>
            </defs>
            <path
                style={{
                // filter: 'url(#shadow)',
                }}
                fillOpacity="1"
                d="M0,0 C272,55 318,-20 500,30 L500,30 L0.00,30.00 Z"
                fill='url(#grad1)'
            >
            </path>
        </svg>
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 'auto',
          background: 'linear-gradient(90.06deg, rgba(32, 73, 7, 0.30) 0%, rgba(232, 135, 30, 0.30) 100%)',
          pt: '3vw',
        // boxShadow: '0px 4px 3px rgba(0, 0, 0, 0.5)',
        }}
    >
        {children}
    </Box>
</Box>
);

export default MainLayout;
