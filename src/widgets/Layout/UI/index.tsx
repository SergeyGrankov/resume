import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Tab, Tabs } from '@mui/material';

import styles from '../styles/index.module.scss';

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
          onClick={() => router.push('/')}
        />
        <Tab
          className={styles.tab}
          label="About me"
          onClick={() => router.push('/about')}
        />
      </Tabs>
      {children}
    </>
  );
}
