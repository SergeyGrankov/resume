import React from 'react';
import type { Metadata } from 'next';

import HomeContent from '@/modules/HomeContent';

import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Resume of Sergey Grankov',
};

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeContent />
    </div>
  );
}
