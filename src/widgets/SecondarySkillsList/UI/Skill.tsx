'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { getMotionProps } from '@/shared/lib/getMotionProps';

import styles from '../styles/Skill.module.scss';

interface IProps {
  title: string;
  text: string;
  delay: number;
}

export default function Skill({ title, text, delay }: IProps) {
  return (
    <div className={styles.subContainer}>
      <motion.div className={styles.title} {...getMotionProps({ delay })}>
        {title}
      </motion.div>
      <motion.div
        className={styles.text}
        {...getMotionProps({ delay: delay + 0.2 })}
      >
        {text}
      </motion.div>
    </div>
  );
}
