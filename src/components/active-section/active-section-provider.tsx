import React, { useState } from 'react';
import { ActiveSectionContext } from './active-section-context';
import type { SectionName } from './active-section-type';

export const ActiveSectionProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};
export { ActiveSectionContext };
