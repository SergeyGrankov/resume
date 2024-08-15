/* eslint-disable */

import { createContext } from 'react';

export const DeviceContext = createContext(true);

export enum devices {
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
}
