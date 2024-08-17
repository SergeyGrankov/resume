import React from 'react';

import BoxContainer from '@/shared/UI/BoxContainer';
import Header from '@/shared/UI/Header';
import Sphere from '@/shared/UI/Sphere';
import Tile from '@/shared/UI/Tile';

import { mainSkillsTags, skills } from '../consts/skills';

import styles from '../styles/index.module.scss';

export default function SkillsList() {
  return (
    <BoxContainer>
      <Header id="mainSkills" text="Main skills" animationStyle="raise" />

      <div className={styles.skills}>
        <Sphere
          radius={140}
          tags={mainSkillsTags}
          className={styles.skillsSphere}
        />

        <div className={styles.tilesContainer}>
          {skills.map((itemText, index) => {
            return <Tile text={itemText} key={index} />;
          })}
        </div>
      </div>
    </BoxContainer>
  );
}
