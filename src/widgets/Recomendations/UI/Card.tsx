'use client';

import React, { useState } from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

import { getMotionProps } from '@/shared/lib/getMotionProps';
import Image from 'next/image';

import { TItem } from '../consts/items';

import styles from '../styles/Card.module.scss';

interface IProps {
  item: TItem;
  index: number;
}

export default function Card({ item, index }: IProps) {
  const [visibleContacts, setVisibleContacts] = useState(false);

  return (
    <motion.div
      className={styles.wrapper}
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

        <Button
          variant="outlined"
          color="info"
          sx={{
            display: 'block',
            marginTop: '8px',
            fontSize: '12px',
            padding: '0',
          }}
          onClick={() => setVisibleContacts(true)}
        >
          {visibleContacts ? (
            <a
              href={`tel:${item.telephone}`}
              className={styles.telephone}
              data-testid="telephone"
            >
              {item.telephone}
            </a>
          ) : (
            'Show contacts'
          )}
        </Button>
      </div>
    </motion.div>
  );
}
