import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useSectionInView } from '../active-section/use-section-in-view';

export const Hero = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id='home'
      className='my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
      >
        <a
          href='#contact'
          className='flex items-center gap-3 rounded border px-3 py-1'
        >
          <span className='relative flex w-[10px] h-[10px]'>
            <span className='absolute flex size-full animate-ping rounded-full bg-emerald-500 opacity-75'></span>
            <span className='relative flex w-[10px] h-[10px] rounded-full bg-emerald-500'></span>
          </span>
          <span className='font-mono text-sm'>Available for work!</span>
        </a>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className='font-heading max-w-3xl text-4xl font-extrabold md:text-5xl'
      >
        Hi, I'm a{' '}
        <span className='bg-gradient-to-r from-emerald-700 to-indigo-600 bg-clip-text text-transparent'>
          Senior frontend
        </span>{' '}
        developer creating modern web apps.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className='max-w-xl my-6'
      >
        A Senior frontend developer based in Ho Chi Minh City, Vietnam. <br />
        I'm passionate about building modern web applications using Angular,
        React
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className='flex flex-row gap-2'
      >
        <Button
          asChild
          size='lg'
        >
          <a href='#contact'>
            Get in touch <ArrowRight className='ml-2 size-4' />
          </a>
        </Button>
        <Button
          variant='outline'
          size='lg'
          className='hidden sm:flex'
          asChild
        >
          <a
            href='/hungpham.pdf'
            download
          >
            Download CV <Download className='ml-2 size-4' />
          </a>
        </Button>
        <Button
          variant='outline'
          size='lg'
          asChild
        >
          <a
            href='https://www.linkedin.com/in/truong-hung-pham-4b1780136'
            aria-label='Linkedin'
            target='_blank'
          >
            <Linkedin className='size-5' />
          </a>
        </Button>
        <Button
          variant='outline'
          size='lg'
          asChild
        >
          <a
            href='https://github.com/truonghungit'
            aria-label='Github'
            target='_blank'
          >
            <Github className='size-5' />
          </a>
        </Button>
      </motion.div>
    </section>
  );
};
