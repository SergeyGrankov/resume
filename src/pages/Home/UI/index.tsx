import React from 'react';

import StarsBackground from '@/shared/UI/StarsBackground';
import SkillsList from '@/widgets/SkillsList/UI';
import Head from 'next/head';

import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/person.ico" />
        <title>Home Page</title>
      </Head>

      <StarsBackground />

      <SkillsList />
    </div>
  );
}
