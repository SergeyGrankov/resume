'use client';

import React, { ReactNode, useEffect } from 'react';
import Box from '@mui/material/Box';
import AOS from 'aos';
import classNames from 'classnames';

import 'aos/dist/aos.css';
import styles from './styles/index.module.scss';

interface IProps {
  children: ReactNode;
  className?: string;
}

export default function BoxContainer({ children, className }: IProps) {
  const cn = classNames(styles.container, className);

  useEffect(() => {
    AOS.init({
      duration: 2800,
      once: false,
    });
  }, []);

  return (
    <Box data-aos="flip-right" className={cn}>
      {children}
    </Box>
  );
}
