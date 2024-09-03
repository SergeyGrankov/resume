import React from 'react';

import BoxContainer from '@/shared/UI/BoxContainer';
import Header from '@/shared/UI/Header';

import { items } from '../consts/items';

import Card from './Card';

import styles from '../styles/index.module.scss';

export default function Recomendations() {
  return (
    <BoxContainer
      sxOptions={{
        margin: {
          xs: '84px 0',
          md: '250px 0',
        },
      }}
    >
      <Header id="recomendations" text="Recomendations" />

      <div className={styles.items}>
        {items.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </div>
    </BoxContainer>
  );
}
