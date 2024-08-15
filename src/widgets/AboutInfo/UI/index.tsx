import React from 'react';

import BoxContainer from '@/shared/UI/BoxContainer';
import Header from '@/shared/UI/Header';

import About from './About';
import Contacts from './Contacts';

import styles from '../styles/index.module.scss';

export default function AboutInfo() {
  return (
    <BoxContainer className={styles.container} initialInView>
      <div className={styles.aboutContainer}>
        <Header id="aboutMe" text="About me #" animationStyle="raise" />

        <About />
      </div>

      <div className={styles.contactsContainer}>
        <Header id="contacts" text="Contacts #" animationStyle="raise" />

        <Contacts />
      </div>
    </BoxContainer>
  );
}
