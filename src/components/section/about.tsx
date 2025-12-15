import { motion } from 'framer-motion';

import { useSectionInView } from '../active-section/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id='about'
      className='my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className='mb-10 text-center'>
        <h2 className='font-heading text-3xl font-semibold'>About Me</h2>
      </div>
      <div className='-mt-5 max-w-2xl text-center leading-7'>
        <p className='mb-4'>
          Hello, my name is Pham Truong Hung. I am a Senior frontend developer
          with 10+ years of experience delivering scalable, performant, and
          accessible web applications. Ability to define architectural direction
          and build component-driven systems across multiple domains (EdTech,
          Fintech, ERP, etc.). Passionate about clean code, testing culture, and
          continuous team improvement. Known for effective cross-team
          collaboration, mentoring, and building a high-quality development
          process that aligns with business goals.
        </p>
        <p>
          I am open to Job opportunities where I can contribute, learn, and
          grow. If you have a good opportunity that matches my skills and
          experience then do not hesitate to contact me.
        </p>
      </div>
    </motion.section>
  );
};
