import React from 'react';

import ScrollToTop from '@/shared/UI/ScrollToTop';
import StarsBackground from '@/shared/UI/StarsBackground';
import SecondarySkillsList from '@/widgets/SecondarySkillsList/UI';
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
      <ScrollToTop />

      <SkillsList />
      <SecondarySkillsList />
    </div>
  );
}
