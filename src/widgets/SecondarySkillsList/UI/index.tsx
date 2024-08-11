import React from 'react';

import BoxContainer from '@/shared/UI/BoxContainer';
import Header from '@/shared/UI/Header';
import Sphere from '@/shared/UI/Sphere';
import Tile from '@/shared/UI/Tile';

import { skills } from '../consts/skills';

import styles from '../styles/index.module.scss';

export default function SecondarySkillsList() {
  return (
    <BoxContainer>
      <Header text="# Secondary skills" animationStyle="raise" />

      <div className={styles.skills}>
        <Sphere radius={108} tags={skills} className={styles.skillsSphere} />

        <div className={styles.tilesContainer}>
          {skills.map((itemText, index) => {
            return <Tile text={itemText} key={index} />;
          })}
        </div>
      </div>
    </BoxContainer>
  );
}
