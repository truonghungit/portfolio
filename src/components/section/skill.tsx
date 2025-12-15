import { skills } from '@/data/skill';

export const Skill = () => {
  return (
    <section className='py-20 px-6'>
      <div className=' max-w-screen-md mx-auto'>
        <div className='mb-10 text-center'>
          <h2 className='font-heading text-3xl font-semibold'>
            Technical Skills
          </h2>
        </div>
        <div className='flex flex-wrap gap-3'>
          {skills.map((skill, index) => (
            <span
              key={index}
              className='px-4 py-2 bg-secondary rounded-lg text-sm font-medium transition-colors hover:bg-secondary/80'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
