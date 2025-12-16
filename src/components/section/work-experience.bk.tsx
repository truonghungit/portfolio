// import { motion } from 'framer-motion';

// import { cn } from '@/lib/utils';
// import { useSectionInView } from '../active-section/use-section-in-view';
// import { experiencesData } from '@/data/work-experience';
// import { Calendar, ChevronRight, MapPin } from 'lucide-react';

// export const WorkExperience = () => {
//   const { ref: sectionRef } = useSectionInView('Experience');

//   return (
//     <section
//       ref={sectionRef}
//       id='experience'
//       className='my-10 scroll-mt-28 md:mb-20'
//     >
//       <div className='mb-10 text-center'>
//         <h2 className='font-heading text-3xl font-semibold'>My Experience</h2>
//         <p className='text-muted-foreground mt-3'>
//           Professional experience that I have accumulated over several years.
//         </p>
//       </div>
//       <div className='relative max-w-screen-md'>
//         {experiencesData.map(
//           ({ title, description, company, period, location, projects }) => (
//             <div
//               key={company}
//               className='not-last:pb-12 relative pl-8 [&:not(:last-child)]:pb-10'
//             >
//               <div className='bg-muted absolute left-0 top-2.5 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]'>
//                 <div className='border-primary bg-background absolute left-[-7px] top-0 size-4 rounded-full border-2' />
//               </div>
//               <motion.div
//                 initial={{ opacity: 0, y: 100 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 0.175,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 className={cn('space-y-3 opacity-0')}
//               >
//                 <div className='flex justify-between'>
//                   <div>
//                     <h3 className='text-2xl font-medium'>{title}</h3>
//                     <span className='text-lg font-semibold'>{company}</span>
//                   </div>

//                   <div className='text-right hidden md:block'>
//                     <div>{period}</div>
//                     <div className='text-sm flex gap-2 items-center text-muted-foreground'>
//                       <MapPin className='w-3 h-3' />
//                       <span>{location}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='md:hidden mt-1 flex items-center gap-2 text-sm'>
//                   <Calendar className='w-4 h-4' />
//                   <span>{period}</span>
//                 </div>
//                 <p className='text-muted-foreground'>{description}</p>
//                 <div className='flex flex-wrap gap-2 relative'>
//                   {projects.map((project, projectIndex) => {
//                     return (
//                       <div key={projectIndex}>
//                         <div className='bg-muted absolute -left-8 top-2.5 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]'>
//                           <div className='border-primary bg-background absolute left-[-5px] top-0 size-3 rounded-full border-2' />
//                         </div>

//                         <div>{project.title}</div>
//                         <div>{project.summary}</div>

//                         <div className='flex flex-wrap gap-2 mb-4'>
//                           {project.tech.map((tech, tIndex) => (
//                             <span
//                               key={tIndex}
//                               className='px-2 py-0.5 text-xs rounded border'
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>

//                         <ul className='space-y-2'>
//                           {project.responsibilities.map(
//                             (responsibility, aIndex) => (
//                               <li
//                                 key={aIndex}
//                                 className='flex items-start gap-2 text-sm'
//                               >
//                                 <ChevronRight className='w-4 h-4 mt-0.5 shrink-0' />
//                                 <span>{responsibility}</span>
//                               </li>
//                             )
//                           )}
//                         </ul>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </motion.div>
//             </div>
//           )
//         )}
//       </div>
//     </section>
//   );
// };
