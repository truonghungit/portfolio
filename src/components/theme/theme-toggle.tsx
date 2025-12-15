import { useTheme } from './theme-provider';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-full transition-colors hover:bg-gray-800'
      aria-label='Toggle theme'
    >
      {theme === 'light' ? (
        <Sun className='w-5 h-5' />
      ) : (
        <Moon className='w-5 h-5' />
      )}
    </button>
  );
};

export { ThemeToggle };
