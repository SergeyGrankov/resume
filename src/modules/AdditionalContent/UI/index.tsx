import React from 'react';

import Background from '@/shared/UI/Background';
import BoxContainer from '@/shared/UI/BoxContainer';
import ScrollToTop from '@/shared/UI/ScrollToTop';
import Image from 'next/image';

import styles from '../styles/index.module.scss';

export default function AdditionalContent() {
  return (
    <>
      <Background />
      <ScrollToTop />

      <BoxContainer>
        <div>Hello, my name is Sergey!</div>

        <Image
          src="/modules/AdditionalContent/leman.jpg"
          alt="Фото Апофеоз Геркулеса2"
          width={500}
          height={300}
          loading="lazy"
        />
        <div className={styles.testLine} />
      </BoxContainer>
    </>
  );
}
