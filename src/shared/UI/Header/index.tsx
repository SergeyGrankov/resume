import React from 'react';
import classNames from 'classnames';

import styles from './styles/index.module.scss';

interface IProps {
  text: string;
  id: string;
  animationStyle: 'pulse' | 'raise';
}

export default function Header({ text, id, animationStyle }: IProps) {
  const cn = classNames(styles.header, styles[animationStyle]);

  return (
    <h1 id={id} className={cn}>
      {text}
    </h1>
  );
}
