import React from 'react';

import styles from './styles/index.module.scss';

export default function StarsBackground() {
  return (
    <>
      <div className={styles.stars}></div>
      <div className={styles.twinkling}></div>
    </>
  );
}
