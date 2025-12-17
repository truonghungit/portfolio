import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { navigation } from '@/data/navigation';
import { useActiveSection } from '../active-section/use-active-section';

import { ThemeToggle } from '../theme/theme-toggle';

export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: showHeader ? 0 : -120,
        opacity: showHeader ? 1 : 0.5,
        transition: { type: 'tween', duration: 0.3 },
      }}
      className='bg-background/80 sticky top-5 z-20 flex items-center gap-2 my-8 rounded-full border px-2 py-1 sm:py-2 backdrop-blur-sm transition-transform duration-300 will-change-transform'
    >
      <nav className='text-muted-foreground block'>
        <ul className='flex gap-3 sm:gap-5 items-center'>
          {navigation.map(({ name, hash, icon }) => {
            const Icon = icon;
            return (
              <li key={name}>
                <a
                  href={hash}
                  className={cn(
                    'flex hover:text-foreground text-sm font-medium relative px-3 py-3 sm:px-4 sm:py-2 transition-colors',
                    name === activeSection && 'text-emerald-700'
                  )}
                  onClick={() => {
                    setActiveSection(name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  <span className='hidden sm:inline-block'>{name}</span>
                  <span className='inline-block sm:hidden'>
                    <Icon className='w-5 h-5' />
                  </span>
                  {name === activeSection && (
                    <motion.span
                      className='bg-muted absolute inset-0 -z-10 rounded-full'
                      layoutId='activeSection'
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </a>
              </li>
            );
          })}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};
