import React from 'react';

import BoxContainer from '@/shared/UI/BoxContainer';
import Header from '@/shared/UI/Header';

import About from './About';

export default function AboutInfo() {
  return (
    <BoxContainer
      sxOptions={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: {
          xs: '34px 0 84px 0',
          md: '34px 0 160px 0',
        },
        gap: '32px',
      }}
    >
      <Header id="aboutMe" text="About me" />

      <About />
    </BoxContainer>
  );
}
