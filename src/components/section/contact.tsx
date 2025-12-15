import { Mail } from 'lucide-react';
import { useTheme } from '../theme/theme-provider';
export const Contact = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <section
      id='contact'
      className={`py-20 px-6 border-t ${
        isDarkMode ? 'border-gray-800' : 'border-gray-200'
      }`}
    >
      <div className='max-w-5xl mx-auto text-center'>
        <div className='mb-10 text-center'>
          <h2 className='font-heading text-3xl font-semibold'>Get in Touch</h2>
          <p className='text-muted-foreground mt-3'>
            Want to chat about a project or opportunity? Feel free to reach out!
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href={`mailto:truonghungit@gmail.com`}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              isDarkMode
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            <Mail className='w-5 h-5' />
            truonghungit@gmail.com
          </a>
          <a
            href='tel:+84915258989'
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors border ${
              isDarkMode
                ? 'border-gray-700 hover:bg-gray-800'
                : 'border-gray-300 hover:bg-gray-100'
            }`}
          >
            (+84) 772 47 48 42
          </a>
        </div>
      </div>
    </section>
  );
};
