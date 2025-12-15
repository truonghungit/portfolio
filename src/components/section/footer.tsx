import { useTheme } from '../theme/theme-provider';

export const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  return (
    <footer
      className={`py-8 px-6 border-t ${
        isDarkMode ? 'border-gray-800' : 'border-gray-200'
      }`}
    >
      <div className='max-w-5xl mx-auto text-center'>
        <p className={isDarkMode ? 'text-gray-500' : 'text-gray-500'}>
          © {new Date().getFullYear()} Pham Truong Hung. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
