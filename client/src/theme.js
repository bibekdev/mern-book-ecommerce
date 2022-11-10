import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    htmlFontSize: 10,
    h1: {
      fontSize: '2rem',
      fontWeight: '600',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: '600',
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: '600',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: '600',
    },
    body1: {
      fontSize: '.8rem',
      textDecoration: 'none',
      transition: 'all .3s ease',
      '&:hover': {
        color: 'black',
      },
    },
    body2: {
      fontSize: '1rem',
      textDecoration: 'none',
      transition: 'all .3s ease',
      '&:hover': {
        color: 'black',
      },
    },
  },
})
