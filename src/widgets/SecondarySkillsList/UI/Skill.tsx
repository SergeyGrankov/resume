import React from 'react';

import TextGenerateEffect from '@/shared/UI/TextGenerateEffect';

import styles from '../styles/skill.module.scss';

interface IProps {
  title: string;
  text: string;
  duration: number;
}

export default function Skill({ title, text, duration }: IProps) {
  return (
    <div className={styles.subContainer}>
      <TextGenerateEffect words={title} duration={duration} />
      <TextGenerateEffect duration={duration} words={text} isDark />
    </div>
  );
}
