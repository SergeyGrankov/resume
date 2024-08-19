'use client';

import React from 'react';
import { motion } from 'framer-motion';

import styles from '../styles/skill.module.scss';

interface IProps {
  title: string;
  text: string;
  delay: number;
}

export default function Skill({ title, text, delay }: IProps) {
  return (
    <div className={styles.subContainer}>
      <motion.div
        className={styles.title}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 0.6, delay }}
      >
        {title}
      </motion.div>
      <motion.div
        className={styles.text}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {text}
      </motion.div>
    </div>
  );
}
