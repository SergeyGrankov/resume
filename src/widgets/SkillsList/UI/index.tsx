import React from 'react';

import BoxContainer from '@/shared/UI/BoxContainer';
import Header from '@/shared/UI/Header';
import Sphere from '@/shared/UI/Sphere';
import Tile from '@/shared/UI/Tile';

import styles from '../styles/index.module.scss';

export default function SkillsList() {
  const elems: string[] = [
    'Javascript',
    'Typescript',
    'Next JS',
    'Scss',
    'Webpack',
    'Vite',
    'Jest',
    'RTL',
    'ESlint',
    'SSR, SSG',
    'Class components',
    'Function components',
    'Redux',
    'Redux-toolkit',
    'Docker',
  ];

  return (
    <BoxContainer>
      <Header text="# Main skills" animationStyle="pulse" />

      <div className={styles.skills}>
        {/* FIXME: сделать заглушку для сферы */}
        <Sphere className={styles.skillsSphere} />

        <div className={styles.tilesContainer}>
          {elems.map((itemText, index) => {
            return <Tile text={itemText} key={index} />;
          })}
        </div>
      </div>
    </BoxContainer>
  );
}
