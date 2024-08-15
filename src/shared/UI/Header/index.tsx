import React from 'react';
import classNames from 'classnames';

import styles from './styles/index.module.scss';

interface IProps {
  text: string;
  id: string;
  animationStyle: 'pulse' | 'raise';
  className?: string;
}

export default function Header({
  text,
  id,
  animationStyle,
  className,
}: IProps) {
  const cn = classNames(styles.header, styles[animationStyle], className);

  return (
    <h1 id={id} className={cn}>
      {text}
    </h1>
  );
}
