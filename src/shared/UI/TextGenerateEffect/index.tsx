'use client';

import React, { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';

import styles from './styles/index.module.scss';

interface IProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export default function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: IProps) {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
    // eslint-disable-next-line
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={styles.word}
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={className}>
      <div className={styles.subContainer}>
        <div className={styles.words}>{renderWords()}</div>
      </div>
    </div>
  );
}
