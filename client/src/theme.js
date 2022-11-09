import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    htmlFontSize: 10,
    h1: {
      fontSize: '3rem',
      fontWeight: '600',
    },
    h2: {
      fontSize: '2.1rem',
      fontWeight: '600',
    },
    h3: {
      fontSize: '2.4rem',
      fontWeight: '600',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: '600',
    },
    body1: {
      fontSize: '1.1rem',
      textDecoration: 'none',
      transition: 'all .3s ease',
      '&:hover': {
        color: 'black',
      },
    },
    body2: {
      fontSize: '1.1rem',
      textDecoration: 'none',
      transition: 'all .3s ease',
      '&:hover': {
        color: 'black',
      },
    },
  },
})
