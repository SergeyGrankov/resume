import React from 'react';

import AboutInfo from '@/widgets/AboutInfo';
import Anchorbar from '@/widgets/Anchorbar';
import ParticlesBlock from '@/widgets/ParticlesBlock';
import SecondarySkillsList from '@/widgets/SecondarySkillsList';
import SkillsList from '@/widgets/SkillsList';
import Background from '@/shared/UI/Background';
import ScrollToTop from '@/shared/UI/ScrollToTop';
import TracingBeam from '@/shared/UI/TracingBeam';

export default function HomeContent() {
  return (
    <>
      <Background />
      <ScrollToTop />

      <ParticlesBlock />
      <Anchorbar />

      <TracingBeam>
        <AboutInfo />
        <SkillsList />
        <SecondarySkillsList />
      </TracingBeam>
    </>
  );
}
