import React from 'react';
import classNames from 'classnames';

import styles from './styles/index.module.scss';

interface IProps {
  text: string;
  id: string;
  withoutBorder?: boolean;
  animationStyle?: 'pulse' | 'raise' | '';
  className?: string;
}

export default function Header({
  text,
  id,
  withoutBorder = false,
  animationStyle = '',
  className,
}: IProps) {
  const cn = classNames(styles.header, styles[animationStyle], className, {
    [styles.withoutBorder]: withoutBorder,
  });

  return (
    <h1 id={id} className={cn}>
      {text}
    </h1>
  );
}
