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
      <span className={styles.text}>
        <p>SERGEY GRANKOV</p>
        <p>FRONTEND DEVELOPER▋</p>
      </span>
    </div>
  );
}
