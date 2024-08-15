import React from 'react';
import type { Metadata } from 'next';

import AdditionalContent from '@/modules/AdditionalContent';

export const metadata: Metadata = {
  title: 'Additional Info',
  description: 'Summary of Sergey Grankov',
};

export default function Additional() {
  return <AdditionalContent />;
}
