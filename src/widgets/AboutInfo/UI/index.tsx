import React from 'react';

import BoxContainer from '@/shared/UI/BoxContainer';
import Header from '@/shared/UI/Header';

import About from './About';

import styles from '../styles/index.module.scss';

export default function AboutInfo() {
  return (
    <BoxContainer className={styles.container}>
      <Header id="aboutMe" text="About me" />

      <About />
    </BoxContainer>
  );
}
