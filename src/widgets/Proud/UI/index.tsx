'use client';

import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { motion } from 'framer-motion';

import { colors } from '@/shared/consts/colors';
import { getMotionProps } from '@/shared/lib/getMotionProps';
import BoxContainer from '@/shared/UI/BoxContainer';
import Header from '@/shared/UI/Header';

import { texts } from '../consts/texts';

import styles from '../styles/index.module.scss';

export default function Proud() {
  return (
    <BoxContainer>
      <Header id="proud" text="Proud" />

      <div className={styles.container}>
        {texts.map((text, index) => (
          // Разбиение на слои нужны для правильной работы motion в сафари на мобильных устройствах
          <div key={index} className={styles.subContainer}>
            <motion.span
              className={styles.star}
              {...getMotionProps({
                delay: index * 0.3,
                y: -300,
                rotate: 1440,
              })}
            >
              <StarRoundedIcon
                sx={{ color: colors.YELLOW, height: 17, width: 17 }}
                viewBox="3 4 17 16"
              />
            </motion.span>

            <motion.span {...getMotionProps({ delay: index * 0.2 })}>
              {text}
            </motion.span>
          </div>
        ))}
      </div>
    </BoxContainer>
  );
}
