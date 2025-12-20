import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { useSectionInView } from '../active-section/use-section-in-view';

export const Education = () => {
  const { ref: sectionRef } = useSectionInView('Education');

  return (
    <section
      ref={sectionRef}
      id='education'
      className='my-10 scroll-mt-28 md:mb-20'
    >
      <div className='mb-10 text-center'>
        <h2 className='font-heading text-3xl font-semibold'>Education</h2>
      </div>
      <div className='relative max-w-screen-md'>
        <div className='not-last:pb-12 relative pl-8 [&:not(:last-child)]:pb-10'>
          <div className='bg-muted absolute left-0 top-2.5 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]'>
            <div className='border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2' />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.175,
            }}
            viewport={{
              once: true,
            }}
            className='space-y-3 opacity-0'
          >
            <div className='flex justify-between'>
              <div>
                <h3 className='text-2xl font-medium mb-2'>
                  Engineer's degree, Software Engineering
                </h3>
                <div className='text-lg font-semibold'>SaiGon University</div>
              </div>
            </div>

            <div>
              <div className='flex items-center gap-2'>
                <Building2 className='w-3.5 h-3.5 text-muted-foreground' />
                <span>SaiGon University</span>
              </div>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Calendar className='w-3.5 h-3.5' />
                <span>Oct 2010 - Oct 2015</span>
              </div>
              <div className='text-sm flex gap-2 items-center text-muted-foreground'>
                <MapPin className='w-3 h-3' />
                <span>Ho Chi Minh City, Vietnam</span>
              </div>
            </div>
            <p className='text-muted-foreground'>
              Graduated with a GPA of 3.43, focusing on software development
              principles, algorithms, and system design. Engaged in various
              projects that enhanced my coding skills and teamwork abilities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
