'use client';

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

import { options } from '../consts/options';

import styles from '../styles/index.module.scss';

export default function ParticlesBlock() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className={styles.container}>
      <Particles id="tsparticles" init={particlesInit} options={options} />
      <p className={styles.firstLine}>SERGEY GRANKOV</p>
      <p className={styles.secondLine}>FRONTEND DEVELOPER</p>
    </div>
  );
}
