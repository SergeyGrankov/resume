import React from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import ElderlyIcon from '@mui/icons-material/Elderly';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import { colors } from '@/shared/consts/colors';
import Image from 'next/image';

import styles from '../styles/about.module.scss';

export default function AboutInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        I am a React Frontend developer with strong skills and knowledge for
        working in a team. I write code independently (seeking advice from
        colleagues when needed), I am hardworking, always striving for
        improvement, ambitious, and have strong communication skills. I value
        rational and well-grounded decision-making processes, and I absolutely
        love web development. <br />
        <br /> My experience is 2 years of commercial development, and before
        that I was interested in studying my specialty for another 1 year.
      </div>

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
        <div className={styles.info}>
          <BadgeIcon sx={{ marginRight: '8px' }} viewBox="0 4 24 24" />
          Full&nbsp;name: Grankov&nbsp;Sergey&nbsp;Nikitich
        </div>

        <div className={styles.info}>
          <ElderlyIcon sx={{ marginRight: '8px' }} />
          Age: 23&nbsp;y.o.
        </div>

        <div className={styles.info}>
          <HomeIcon sx={{ marginRight: '8px' }} />
          Location: Russia,&nbsp;Moscow
        </div>

        <div className={styles.info}>
          <SchoolIcon sx={{ marginRight: '8px' }} />
          Education: Higher&nbsp;education
        </div>
      </Stack>

      <Image
        className={styles.photo}
        src="/widgets/AboutInfo/me.webp"
        width={220}
        height={280}
        alt="My image"
      />
    </div>
  );
}
