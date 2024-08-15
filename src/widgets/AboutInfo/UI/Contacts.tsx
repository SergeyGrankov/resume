'use client';

import React from 'react';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import { colors } from '@/shared/consts/colors';

import styles from '../styles/contacts.module.scss';

export default function Contacts() {
  const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      throw new Error('Copy error!');
    }
  };

  return (
    <Stack
      direction="column"
      divider={
        <Divider
          sx={{ backgroundColor: colors.SPACE_GRAY }}
          orientation="horizontal"
          variant="inset"
          flexItem
        />
      }
      spacing={2}
      sx={{ marginTop: '24px' }}
    >
      <div className={styles.info}>
        <ContactPhoneIcon sx={{ marginRight: '8px' }} />
        Telephone:{' '}
        <a href="tel:+79859383263" className={styles.link}>
          8-985-938-32-63
        </a>
      </div>

      <div
        className={styles.info}
        onClick={() => copyTextToClipboard('ima_vandal')}
      >
        <TelegramIcon sx={{ marginRight: '8px' }} />
        Telegram: ima_vandal
        <IconButton color="info" aria-label="copy button">
          <ContentCopyIcon viewBox="-4 -4 32 32" />
        </IconButton>
      </div>

      <div
        className={styles.info}
        onClick={() => copyTextToClipboard('1910serg@mail.ru')}
      >
        <MailIcon sx={{ marginRight: '8px' }} />
        Mail: 1910serg@mail.ru
        <IconButton color="info" aria-label="copy button">
          <ContentCopyIcon viewBox="-4 -4 32 32" />
        </IconButton>
      </div>
    </Stack>
  );
}
