'use client';

import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#8276eb', // main цвет
      dark: '#4d4d4d', // space-gray цвет
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  breakpoints: {
    values: {
      // Основные брейкпоинты, совпадают с теми, что лежат в глобальных стилях
      xs: 0, // small screens
      sm: 440, // big mobiles (mui different)
      md: 800, // small laptops
      lg: 1024, // desktops
      xl: 1920, // large screens
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          justifyContent: 'center',
        },
      },
    },
  },
});

export default theme;
