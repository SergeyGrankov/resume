import React, { ReactNode, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { Tab, Tabs } from '@mui/material';

import { Routes } from '@/shared/consts/pages';

import styles from '../styles/index.module.scss';

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
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
    <>
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
      {children}
    </>
  );
}
