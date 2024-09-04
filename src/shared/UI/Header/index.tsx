'use client';

import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import styles from './styles/index.module.scss';

interface IProps {
  text: string;
  id?: string;
  withoutBorder?: boolean;
  className?: string;
}

export default function Header({
  text,
  id,
  withoutBorder = false,
  className,
}: IProps) {
  const cn = classNames(styles.header, className, {
    [styles.withoutBorder]: withoutBorder,
  });

  return (
    <motion.h1
      id={id}
      className={cn}
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
    >
      {text}
    </motion.h1>
  );
}
