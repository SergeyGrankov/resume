'use client';

import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from '@mui/material/IconButton';

import { colors } from '@/shared/consts/colors';
import BoxContainer from '@/shared/UI/BoxContainer';
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
    <BoxContainer
      sxOptions={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        height: '160px',
        padding: '24px 0',
        margin: 0,
        backgroundColor: colors.BLACK,
        borderTop: `1px solid ${colors.SPACE_GRAY}`,
        borderRadius: 0,
      }}
    >
      <Header id="contacts" text="Get in touch:" withoutBorder />

      <div className={styles.info}>
        <CallIcon sx={{ marginRight: '8px' }} />
        Telephone:
        <a href="tel:+79859383263" className={styles.link}>
          +7-(985)-938-32-63
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
    </BoxContainer>
  );
}
