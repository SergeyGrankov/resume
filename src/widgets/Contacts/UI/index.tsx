'use client';

import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';

import { getMotionProps } from '@/shared/lib/getMotionProps';
import Header from '@/shared/UI/Header';

import styles from '../styles/index.module.scss';

export default function Contacts() {
  const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      throw new Error('Copy error!');
    }
  };

  return (
    <div className={styles.container}>
      <Header id="contacts" text="Get in touch:" withoutBorder />

      <motion.div className={styles.info} {...getMotionProps(0.2)}>
        <CallIcon sx={{ marginRight: '8px' }} />
        Telephone:{' '}
        <a href="tel:+79859383263" className={styles.link}>
          +7-(985)-938-32-63
        </a>
      </motion.div>

      <motion.div
        className={styles.info}
        onClick={() => copyTextToClipboard('ima_vandal')}
        {...getMotionProps(0.4)}
      >
        <TelegramIcon sx={{ marginRight: '8px' }} />
        Telegram: ima_vandal
        <IconButton color="info" aria-label="copy button">
          <ContentCopyIcon viewBox="-4 -4 32 32" />
        </IconButton>
      </motion.div>

      <motion.div
        className={styles.info}
        onClick={() => copyTextToClipboard('1910serg@mail.ru')}
        {...getMotionProps(0.6)}
      >
        <MailIcon sx={{ marginRight: '8px' }} />
        Mail: 1910serg@mail.ru
        <IconButton color="info" aria-label="copy button">
          <ContentCopyIcon viewBox="-4 -4 32 32" />
        </IconButton>
      </motion.div>
    </div>
  );
}
