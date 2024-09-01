import React from 'react';

import Background from '@/shared/UI/Background';
import BoxContainer from '@/shared/UI/BoxContainer';
import ScrollToTop from '@/shared/UI/ScrollToTop';

export default function AdditionalContent() {
  return (
    <>
      <Background />
      <ScrollToTop />

      <BoxContainer>
        <div>Hello, my name is Sergey!</div>
      </BoxContainer>
    </>
  );
}
