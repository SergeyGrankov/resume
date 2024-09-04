import React from 'react';

import BoxContainer from '@/shared/UI/BoxContainer';
import Header from '@/shared/UI/Header';
import TextGenerateEffect from '@/shared/UI/TextGenerateEffect';

import { hobbies, THobby } from '../consts/hobbies';

import styles from '../styles/index.module.scss';

export default function Hobbies() {
  return (
    <BoxContainer
      sxOptions={{
        margin: {
          xs: '34px 0 84px 0',
          md: '34px 0 160px 0',
        },
      }}
    >
      <Header text="My hobbies" />

      <div className={styles.container}>
        {hobbies.map((hobby: THobby, index) => (
          <TextGenerateEffect
            key={index}
            className={styles.hobby}
            words={hobby}
            duration={1 * index}
          />
        ))}
      </div>
    </BoxContainer>
  );
}
