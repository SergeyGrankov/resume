import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';

interface IProps {
  children: ReactNode;
  sxOptions?: Object;
}

export default function BoxContainer({ children, sxOptions }: IProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        margin: {
          xs: '84px 0',
          md: '160px 0',
        },

        ...sxOptions,
      }}
    >
      {children}
    </Box>
  );
}
