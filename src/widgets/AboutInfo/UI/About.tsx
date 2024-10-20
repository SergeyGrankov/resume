'use client';

import React from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import ElderlyIcon from '@mui/icons-material/Elderly';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';

import { colors } from '@/shared/consts/colors';
import { getMotionProps } from '@/shared/lib/getMotionProps';
import TextGenerateEffect from '@/shared/UI/TextGenerateEffect';
import Image from 'next/image';

import { words } from '../consts/words';

import styles from '../styles/about.module.scss';

export default function About() {
  return (
    <div className={styles.container}>
      <TextGenerateEffect className={styles.text} words={words} isDark />

      <Stack
        direction="column"
        divider={
          <Divider
            sx={{ backgroundColor: colors.SPACE_GRAY }}
            orientation="horizontal"
            variant="fullWidth"
            flexItem
          />
        }
        spacing={2}
      >
        <motion.div className={styles.info} {...getMotionProps({ delay: 0 })}>
          <BadgeIcon sx={{ marginRight: '8px' }} viewBox="0 4 24 24" />
          Full&nbsp;name: Grankov&nbsp;Sergey&nbsp;Nikitich
        </motion.div>

        <motion.div className={styles.info} {...getMotionProps({ delay: 0.2 })}>
          <ElderlyIcon sx={{ marginRight: '8px' }} />
          Age: 23&nbsp;y.o.
        </motion.div>

        <motion.div className={styles.info} {...getMotionProps({ delay: 0.4 })}>
          <HomeIcon sx={{ marginRight: '8px' }} />
          Location: Russia,&nbsp;Moscow
        </motion.div>

        <motion.div className={styles.info} {...getMotionProps({ delay: 0.6 })}>
          <SchoolIcon sx={{ marginRight: '8px' }} />
          Education: Higher&nbsp;education
        </motion.div>
      </Stack>

      <motion.div
        className={styles.photoWrapper}
        {...getMotionProps({ delay: 1.2 })}
      >
        <Image
          className={styles.photo}
          src="/widgets/AboutInfo/me.webp"
          width={361}
          height={270}
          alt="My image"
          loading="eager"
        />
      </motion.div>
    </div>
  );
}
