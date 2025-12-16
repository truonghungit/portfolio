import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { navigation } from '@/data/navigation';
import { useActiveSection } from '../active-section/use-active-section';
import { ThemeToggle } from '../theme/theme-toggle';

export const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  console.log('Active Section:', activeSection);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className='bg-background/80 sticky top-5 z-20 my-5 flex items-center gap-2 top-10 my-8 rounded-full border px-2 py-2 sm:py-3 backdrop-blur-sm'
    >
      <nav className='text-muted-foreground text-sm block'>
        <ul className='flex gap-3 sm:gap-5 items-center'>
          {navigation.map(({ name, hash, icon }) => {
            const Icon = icon;
            return (
              <li key={name}>
                <a
                  href={hash}
                  className='flex hover:text-foreground relative px-3 py-3 sm:px-4 sm:py-2 transition-colors'
                  onClick={() => {
                    setActiveSection(name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  <span
                    className={cn(
                      'hidden sm:inline-block',
                      name === activeSection && 'text-emerald-700'
                    )}
                  >
                    {name}
                  </span>
                  <span className='inline-block sm:hidden'>
                    <Icon
                      className={cn(
                        'w-5 h-5',
                        name === activeSection && 'text-emerald-700'
                      )}
                    />
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
