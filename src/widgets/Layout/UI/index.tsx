'use client';

import React, { useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { Tab, Tabs, Typography } from '@mui/material';

import { Routes } from '@/shared/consts/pages';
import Image from 'next/image';

import styles from '../styles/index.module.scss';
import myPhoto from '../styles/me.webp';

export default function Layout() {
  const [value, setValue] = React.useState(0);
  const { push, pathname }: NextRouter = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const curPage = pathname === Routes.Home ? 0 : 1;

    setValue(curPage);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <Typography
        className={styles.typography}
        variant="h5"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
      >
        SGN
      </Typography>

      <Tabs
        className={styles.tabs}
        value={value}
        onChange={handleChange}
        aria-label="nav tabs"
        role="navigation"
        centered
      >
        <Tab
          className={styles.tab}
          label="Home"
          onClick={() => push(Routes.Home)}
        />
        <Tab
          className={styles.tab}
          label="Additional info"
          onClick={() => push(Routes.Additional)}
        />
      </Tabs>

      <Image
        className={styles.myPhoto}
        src={myPhoto}
        alt="My photo"
        width={48}
      />
    </div>
  );
}
