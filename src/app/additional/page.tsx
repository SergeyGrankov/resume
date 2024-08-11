import React from 'react';
import type { Metadata } from 'next';

import AdditionalContent from '@/modules/AdditionalContent';

import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Additional Info',
  description: 'Resume of Sergey Grankov',
};

export default function Additional() {
  return (
    <div className={styles.container}>
      <AdditionalContent />
    </div>
  );
}
