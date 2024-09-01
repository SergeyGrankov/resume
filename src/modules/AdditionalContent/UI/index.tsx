import React from 'react';

import BoxContainer from '@/shared/UI/BoxContainer';
import TracingBeam from '@/shared/UI/TracingBeam';

export default function AdditionalContent() {
  return (
    <>
      <TracingBeam>
        {/* TODO: убрать это */}
        <BoxContainer>
          <div>Hello, my name is Sergey!</div>
        </BoxContainer>
      </TracingBeam>
    </>
  );
}
