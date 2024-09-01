import React from 'react';

import AboutInfo from '@/widgets/AboutInfo';
import Anchorbar from '@/widgets/Anchorbar';
import Experience from '@/widgets/Experience';
import ParticlesBlock from '@/widgets/ParticlesBlock';
import Proud from '@/widgets/Proud';
import Recomendations from '@/widgets/Recomendations';
import SecondarySkillsList from '@/widgets/SecondarySkillsList';
import SkillsList from '@/widgets/SkillsList';
import TracingBeam from '@/shared/UI/TracingBeam';

export default function HomeContent() {
  return (
    <>
      <ParticlesBlock />
      <Anchorbar />

      <TracingBeam>
        <AboutInfo />
        <SkillsList />
        <SecondarySkillsList />
        <Experience />
        <Proud />
        <Recomendations />
      </TracingBeam>
    </>
  );
}
