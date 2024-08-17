import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { anchorsData } from '../consts/anchorsData';

import styles from '../styles/index.module.scss';

export default function Anchorbar() {
  return (
    <div className={styles.container}>
      <Tabs
        value={false}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="anchor tabs"
        role="navigation"
      >
        {anchorsData.map((anch, index) => (
          <Tab
            sx={{
              color: '#e2e3e7',
              fontSize: {
                xs: 14,
                md: 18,
              },
            }}
            label={anch.label}
            href={anch.href}
            key={index}
          />
        ))}
      </Tabs>
    </div>
  );
}
