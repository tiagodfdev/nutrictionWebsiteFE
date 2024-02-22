import { createTheme } from '@mui/material';
import { ptBR } from '@mui/x-data-grid';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D5E4C1',
    },
    secondary: {
      main: '#EF959D',
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      '"IBM Plex Sans"',
      'Roboto',
      '"General Sans"',
    ].join(','),
  },
},
ptBR);

export default theme;
