import React from 'react';
import classNames from 'classnames';

import styles from './styles/index.module.scss';

interface IProps {
  text: string;
  animationStyle: 'pulse' | 'raise';
  className?: string;
}

export default function Header({ text, className, animationStyle }: IProps) {
  const defaultCn = classNames(styles.header, styles[animationStyle]);

  return <h1 className={className || defaultCn}>{text}</h1>;
}
