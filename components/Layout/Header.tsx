/* eslint-disable dot-notation */
import React, { useEffect, useState, useRef } from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import Logo from '../../assets/Logo';
import SearchBar from '../SearchBar';

function Header() {
  // const [scrollY, setScrollY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [isSmall, setIsSmall] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setHeaderHeight(ref.current!['clientHeight']);
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if ((scrollTop > headerHeight) && !isSmall) {
      setIsSmall(true);
    }
    if ((scrollTop < headerHeight) && isSmall) {
      setIsSmall(false);
    }
  });
  return (
      <Box
        component={'header'}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'primary.main',
          width: '100%',
          zIndex: '2',
        }}
      >
        <Box
        sx={{
          display: isSmall ? 'flex' : 'none',
          height: isSmall ? headerHeight : '0px',
        }}
        ></Box>
        <Box ref={ref}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '2',
            px: '16px',
            position: isSmall ? 'fixed' : 'static',
            height: isSmall ? '3.5rem' : 'auto',
            top: '0px',
            bgcolor: 'primary.main',
            width: '100%',
          }}
        >
          <Box
          sx={{
            display: 'flex',
            maxWidth: '600px',
            width: '100%',
            flexDirection: isSmall ? 'row' : 'column',
            alignItems: 'center',
            justifyContent: isSmall ? 'space-between' : 'center',
          }}
          >
            <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: '5vw',
              mb: '5vw',
              backgroundColor: 'transparent',
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
                    <Logo width={isSmall ? '26' : '53'} height={isSmall ? '39' : '80'}/>
                </Box>
              </a>
              </Link>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: isSmall ? '80%' : '100%',
              }}
            >
              <SearchBar/>
            </Box>
          </Box>
        </Box>
      </Box>
  );
}
export default Header;
