'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Tab, Tabs, Typography } from '@mui/material';

import { Routes } from '@/shared/consts/routes';
import Image from 'next/image';

import styles from '../styles/index.module.scss';

export default function Navbar() {
  const { push } = useRouter();
  const pathname = usePathname();
  const curPage = pathname === Routes.Home ? 0 : 1;

  return (
    <div className={styles.container}>
      <Typography
        sx={{
          display: 'flex',
          fontSize: {
            xs: 12,
            sm: 14,
            lg: 26,
          },
          fontWeight: 700,
          letterSpacing: '0.3rem',
          color: 'inherit',
          textDecoration: 'none',
          marginRight: '4px',
        }}
        variant="h5"
        noWrap
        component="a"
        href={Routes.Home}
      >
        SGN
      </Typography>

      <Tabs value={curPage} aria-label="nav tabs" role="navigation" centered>
        <Tab
          sx={{
            color: '#e2e3e7',
            fontSize: {
              xs: 12,
              sm: 14,
              lg: 18,
            },
          }}
          label="Home"
          onClick={() => push(Routes.Home)}
        />
        <Tab
          sx={{
            color: '#e2e3e7',
            fontSize: {
              xs: 12,
              sm: 14,
              lg: 18,
            },
          }}
          label="Additional info"
          onClick={() => push(Routes.Additional)}
        />
      </Tabs>

      <Image
        className={styles.myPhoto}
        src="/widgets/Navbar/me.webp"
        alt="My photo"
        width={48}
        height={48}
      />
    </div>
  );
}
