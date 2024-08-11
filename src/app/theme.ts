'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#8276eb', // основной цвет
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  breakpoints: {
    values: {
      // Основные брейкпоинты, совпадают с теми, что лежат в глобальных стилях
      xs: 0, // small screens
      sm: 440, // big mobiles (mui different)
      md: 900, // small laptops
      lg: 1024, // desktops
      xl: 1920, // large screens
    },
  },
});

export default theme;
