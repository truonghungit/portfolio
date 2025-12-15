import type { navigation } from '@/data/navigation';

export type SectionName = (typeof navigation)[number]['name'];

export type ActiveSectionContextType = {
  activeSection: SectionName;
  timeOfLastClick: number;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
