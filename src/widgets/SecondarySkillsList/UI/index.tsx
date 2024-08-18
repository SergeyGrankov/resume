import React from 'react';

import BoxContainer from '@/shared/UI/BoxContainer';
import Header from '@/shared/UI/Header';

import { items } from '../consts/items';

import Skill from './Skill';

import styles from '../styles/index.module.scss';

export default function SecondarySkillsList() {
  return (
    <BoxContainer>
      <Header
        id="#secondarySkills"
        text="Secondary skills"
        animationStyle="raise"
      />

      <div className={styles.container}>
        {items.map((item) => (
          <Skill
            title={item.title}
            text={item.text}
            duration={item.duration}
            key={item.title}
          />
        ))}
      </div>
    </BoxContainer>
  );
}
