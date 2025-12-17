import { skillGroups } from '@/data/skill';
import { useSectionInView } from '../active-section/use-section-in-view';

// Data structure for skill groups

export const Skill = () => {
  const { ref: sectionRef } = useSectionInView('About');

  return (
    <section
      ref={sectionRef}
      id='skills'
      className='py-20 px-6'
    >
      <div className=' max-w-screen-md mx-auto'>
        <div className='mb-10 text-center'>
          <h2 className='font-heading text-3xl font-semibold'>
            Technical Skills
          </h2>
        </div>
        <div className='text-center flex flex-col gap-4'>
          {skillGroups.map(({ skills, title }, index) => (
            <div key={index}>
              <div>{title}</div>
              <div className='flex flex-wrap gap-3 justify-center my-3'>
                {skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className='px-4 py-2 bg-secondary rounded-lg text-sm transition-colors hover:bg-secondary/80'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
