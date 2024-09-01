'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { getMotionProps } from '@/shared/lib/getMotionProps';
import BoxContainer from '@/shared/UI/BoxContainer';
import Header from '@/shared/UI/Header';
import Image from 'next/image';

import { items } from '../consts/items';

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
          <motion.div
            className={styles.wrapper}
            key={index}
            {...getMotionProps({ duration: 1, delay: index * 0.5 })}
          >
            <Image
              className={styles.photo}
              src={item.src}
              alt={'Developer photo:' + item.name}
              width={94}
              height={94}
              loading="lazy"
            />

            <div className={styles.info}>
              <div className={styles.name}>
                {item.name} {item.surname}
              </div>
              <div className={styles.post}>{item.post}</div>
              <div className={styles.role}>{item.role}</div>
              <a href={`tel:${item.telephone}`} className={styles.telephone}>
                {item.telephone}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </BoxContainer>
  );
}
