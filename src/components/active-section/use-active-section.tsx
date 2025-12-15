import { useContext } from 'react';
import { ActiveSectionContext } from './active-section-provider';

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSection must be used within an ActiveSectionProvider'
    );
  }

  return context;
};
