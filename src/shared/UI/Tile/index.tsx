import React from 'react';

import styles from './styles/index.module.scss';

interface IProps {
  text: string;
  className?: string;
}

export default function Tile({ text, className }: IProps) {
  return <span className={className || styles.tile}>{text}</span>;
}
