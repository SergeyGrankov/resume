import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import classNames from 'classnames';

import styles from './styles/index.module.scss';

interface IProps {
  children: ReactNode;
  className?: string;
}

export default function BoxContainer({ children, className }: IProps) {
  const cn = classNames(styles.outerContainer, className);

  return <Box className={cn}>{children}</Box>;
}
