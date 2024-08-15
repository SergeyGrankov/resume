import React from 'react';
import type { Metadata } from 'next';

import HomeContent from '@/modules/HomeContent';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Summary of Sergey Grankov',
};

export default function Home() {
  return <HomeContent />;
}
