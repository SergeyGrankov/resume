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
        margin: '84px 0',
        zIndex: 1,
        md: {
          margin: '102px 0',
        },

        ...sxOptions,
      }}
    >
      {children}
    </Box>
  );
}
