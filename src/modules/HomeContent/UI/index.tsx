import React from 'react';

import Anchorbar from '@/widgets/Anchorbar';
import ParticlesBlock from '@/widgets/ParticlesBlock';
import SecondarySkillsList from '@/widgets/SecondarySkillsList';
import SkillsList from '@/widgets/SkillsList';
import ScrollToTop from '@/shared/UI/ScrollToTop';
import StarsBackground from '@/shared/UI/StarsBackground';

export default function HomeContent() {
  return (
    <>
      <StarsBackground />
      <ScrollToTop />

      <ParticlesBlock />
      <Anchorbar />
      <SkillsList />
      <SecondarySkillsList />
    </>
  );
}
