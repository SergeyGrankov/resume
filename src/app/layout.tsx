import React from 'react';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import Contacts from '@/widgets/Contacts';
import Navbar from '@/widgets/Navbar';

import theme from './theme';

import './global.scss';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Navbar />
            {children}
            <Contacts />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
