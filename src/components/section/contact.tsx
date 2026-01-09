import { Mail } from 'lucide-react';
import { Button } from '../ui/button';

export const Contact = () => {
  return (
    <section
      id='contact'
      className='py-20 px-6 border-t border-gray-200 dark:border-gray-800'
    >
      <div className='max-w-5xl mx-auto text-center'>
        <div className='mb-10 text-center'>
          <h2 className='font-heading text-3xl font-semibold'>Get in Touch</h2>
          <p className='text-muted-foreground mt-3'>
            Want to chat about a project or opportunity? Feel free to reach out!
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button
            asChild
            size='lg'
            className='rounded-full'
          >
            <a href={`mailto:truonghungit@gmail.com`}>
              <Mail className='w-5 h-5' />
              truonghungit@gmail.com
            </a>
          </Button>
          <Button
            asChild
            variant='outline'
            className='rounded-full'
            size='lg'
          >
            <a href='tel:+84772474842'>(+84) 772 47 48 42</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
