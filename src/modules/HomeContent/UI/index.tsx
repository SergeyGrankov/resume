import React from 'react';

import ParticlesBlock from '@/widgets/Particles/UI';
import SecondarySkillsList from '@/widgets/SecondarySkillsList/UI';
import SkillsList from '@/widgets/SkillsList/UI';
import ScrollToTop from '@/shared/UI/ScrollToTop';
import StarsBackground from '@/shared/UI/StarsBackground';

export default function HomeContent() {
  return (
    <>
      <StarsBackground />
      <ScrollToTop />

      <ParticlesBlock />
      <SkillsList />
      <SecondarySkillsList />
    </>
  );
}
