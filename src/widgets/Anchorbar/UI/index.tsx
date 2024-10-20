import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { colors } from '@/shared/consts/colors';

import { anchorsData } from '../consts/anchorsData';

export default function Anchorbar() {
  return (
    <Tabs
      sx={{
        top: 0,
        zIndex: 2,
        borderBottom: `1px solid ${colors.SPACE_GRAY}`,
        borderTop: `1px solid ${colors.SPACE_GRAY}`,
        backgroundColor: colors.BLACK,
      }}
      value={false}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="anchor tabs"
      role="navigation"
    >
      {anchorsData.map((anch, index) => (
        <Tab
          sx={{
            color: '#e2e3e7',
            fontSize: {
              xs: 14,
              md: 18,
            },
          }}
          label={anch.label}
          href={anch.href}
          key={index}
        />
      ))}
    </Tabs>
  );
}
