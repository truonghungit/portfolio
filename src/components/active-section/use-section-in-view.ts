import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from './use-active-section';
import type { SectionName } from './active-section-type';

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const { ref, inView } = useInView({
    threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
