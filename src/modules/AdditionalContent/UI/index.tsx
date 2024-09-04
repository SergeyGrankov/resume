import React from 'react';

import Hobbies from '@/widgets/Hobbies';
import TracingBeam from '@/shared/UI/TracingBeam';

export default function AdditionalContent() {
  return (
    <>
      <TracingBeam>
        <Hobbies />
      </TracingBeam>
    </>
  );
}
