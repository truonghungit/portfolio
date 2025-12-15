import { createContext } from 'react';
import type { ActiveSectionContextType } from './active-section-type';

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
