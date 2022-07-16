import { Box } from '@mui/material';
import React from 'react';
import { PageProps } from '../../types';

const MainLayout = ({ children }:PageProps) => (
    <Box
        display='flex'
        flexDirection='column'
        width='100%'
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
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
                d="M0,64L60,90.7C120,117,240,171,360,208C480,245,600,267,720,240C840,213,960,139,1080,144C1200,149,1320,235,1380,277.3L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                fill='url(#grad1)'
            >
            </path>
        </svg>
    <Box
        sx={{
          width: '100%',
          height: 'auto',
          background: 'linear-gradient(90.06deg, rgba(32, 73, 7, 0.30) 0%, rgba(232, 135, 30, 0.30) 100%)',
        // boxShadow: '0px 4px 3px rgba(0, 0, 0, 0.5)',
        }}
    >
        {children}
    </Box>
</Box>
);

export default MainLayout;
