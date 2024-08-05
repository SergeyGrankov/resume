'use client';

import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import Box from '@mui/material/Box';
import classNames from 'classnames';

import styles from './styles/index.module.scss';

interface IProps {
  children: ReactNode;
  initialInView?: boolean;
  className?: string;
}

export default function BoxContainer({
  initialInView = false,
  children,
  className,
}: IProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    initialInView,
  });

  const cn = classNames(styles.container, className, {
    [styles.inView]: inView,
  });

  return (
    <Box ref={ref} className={cn}>
      {children}
    </Box>
  );
}
