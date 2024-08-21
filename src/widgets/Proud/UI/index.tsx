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
          <motion.div
            className={styles.text}
            key={index}
            {...getMotionProps(index * 0.2)}
          >
            <motion.span
              className={styles.icon}
              initial={{ opacity: 0, y: -280, x: -100, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, x: 0, rotate: -720 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <StarRoundedIcon
                sx={{ color: colors.YELLOW, height: 17, width: 17 }}
                viewBox="3 4 17 16"
              />
            </motion.span>
            {text}
          </motion.div>
        ))}
      </div>
    </BoxContainer>
  );
}
