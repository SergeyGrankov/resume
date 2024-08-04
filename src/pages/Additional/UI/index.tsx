import React from 'react';

import BoxContainer from '@/shared/UI/BoxContainer';
import Counter from '@/shared/UI/Counter';
import StarsBackground from '@/shared/UI/StarsBackground';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/index.module.scss';
import leman from '../styles/leman.jpg';

export default function Additional() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/eye.ico" />
        <title>Additional Page</title>
      </Head>

      <StarsBackground />

      <BoxContainer>
        <div>Hello, my name is Sergey!</div>

        <Image src={leman} alt="Фото Апофеоз Геркулеса2" width={500} />
        <div className={styles.testLine} />

        <Counter />
      </BoxContainer>
    </div>
  );
}
