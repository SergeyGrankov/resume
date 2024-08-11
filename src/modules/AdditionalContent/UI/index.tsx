import React from 'react';

import BoxContainer from '@/shared/UI/BoxContainer';
import Counter from '@/shared/UI/Counter';
import ScrollToTop from '@/shared/UI/ScrollToTop';
import StarsBackground from '@/shared/UI/StarsBackground';
import Image from 'next/image';

import styles from '../styles/index.module.scss';

export default function AdditionalContent() {
  return (
    <>
      <StarsBackground />
      <ScrollToTop />

      <BoxContainer initialInView>
        <div>Hello, my name is Sergey!</div>

        <Image
          src="/modules/AdditionalContent/leman.jpg"
          alt="Фото Апофеоз Геркулеса2"
          width={500}
          height={300}
        />
        <div className={styles.testLine} />

        <Counter />
      </BoxContainer>
    </>
  );
}
