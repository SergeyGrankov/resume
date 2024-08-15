import React from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import ElderlyIcon from '@mui/icons-material/Elderly';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import { colors } from '@/shared/consts/colors';

import styles from '../styles/about.module.scss';

export default function AboutInfo() {
  return (
    <Stack
      direction="column"
      divider={
        <Divider
          sx={{ backgroundColor: colors.SPACE_GRAY }}
          orientation="horizontal"
          variant="inset"
          flexItem
        />
      }
      spacing={2}
      sx={{ marginTop: '24px' }}
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
  );
}
