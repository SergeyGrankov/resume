'use client';

import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { Button } from '@mui/material';

import styles from './styles/index.module.scss';

export default function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className={styles.error}>
      <p className={styles.errorText}>Что-то пошло не так: {error.message}</p>
      <Button onClick={resetErrorBoundary} variant="contained">
        Попробовать снова
      </Button>
    </div>
  );
}
