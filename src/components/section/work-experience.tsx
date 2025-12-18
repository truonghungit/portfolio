import React, { useState } from 'react';
import { useSectionInView } from '../active-section/use-section-in-view';
import {
  experiences,
  type Experience,
  type ExperienceProject,
} from '@/data/work-experience';
import { Button } from '../ui/button';

// Impact metric badge
function ImpactBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className='inline-block bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded mr-2 mb-1 text-xs'>
      {children}
    </span>
  );
}

const TechTag = ({ tech }: { tech: string }) => {
  return (
    <span className='inline-block bg-gray-200 text-gray-700 px-2 py-0.5 rounded mr-1 mb-1 text-xs'>
      {tech}
    </span>
  );
};

const ProjectCard = ({ project }: { project: ExperienceProject }) => {
  return (
    <div className='relative'>
      <div className='border-primary bg-background absolute left-[-59px] top-1 size-2 rounded-full border' />

      <div className='space-y-2'>
        <div className='font-semibold'>{project.name}</div>
        <div className='text-gray-600'>{project.description}</div>
        <div className='flex flex-wrap'>
          {project.techStack.map((tech: string, idx: number) => (
            <TechTag
              key={idx}
              tech={tech}
            />
          ))}
        </div>
        <div className='text-gray-600'>{project.problem}</div>
        <ul className='list-disc list-inside'>
          {project.actions.map((action: string, idx: number) => (
            <li key={idx}>{action}</li>
          ))}
        </ul>
        <div>
          {project.impact.map((metric: string, idx: number) => (
            <ImpactBadge key={idx}>{metric}</ImpactBadge>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const [showAll, setShowAll] = useState(false);
  const highlighted = experience.projects.filter((p) => p.highlights);
  const others = experience.projects.filter((p) => !p.highlights);
  const showMore = others.length > 0 && !showAll;

  return (
    <div className='relative pl-8'>
      <div className='border-primary bg-background absolute left-[-5px] top-2 size-3 rounded-full border-2' />

      <div>
        <div className='flex flex-wrap items-center justify-between mb-1'>
          <div className='font-medium text-base'>{experience.title}</div>
          <div className='text-xs text-gray-500'>
            {experience.startDate} - {experience.endDate}
          </div>
        </div>
        <div className='text-gray-700 mb-1'>{experience.scope}</div>
        <ul className='list-disc list-inside mb-2'>
          {experience.responsibilities
            .slice(0, 4)
            .map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
        </ul>

        <div className='pl-6 pt-4'>
          {highlighted.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

          {showAll && (
            <>
              {others.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
              <Button
                variant='outline'
                size='sm'
                onClick={() => setShowAll(false)}
              >
                Show less
              </Button>
            </>
          )}

          {showMore && (
            <Button
              variant='outline'
              size='sm'
              onClick={() => setShowAll(true)}
            >
              View more projects
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

function groupByCompany(experiences: Experience[]) {
  const map = new Map<string, Experience[]>();

  experiences.forEach((exp) => {
    if (!map.has(exp.company)) {
      map.set(exp.company, []);
    }

    map.get(exp.company)!.push(exp);
  });

  return Array.from(map.entries()).map(([company, experiences]) => {
    return {
      company,
      experiences,
    };
  });
}

const CompanySection = ({
  company,
  experiences,
}: {
  company: string;
  experiences: Experience[];
}) => {
  const dates = experiences.reduce<[string, string]>(
    (acc, pos) => [
      acc[0] && acc[0] < pos.startDate ? acc[0] : pos.startDate,
      acc[1] && acc[1] > pos.endDate ? acc[1] : pos.endDate,
    ],
    [experiences[0]?.startDate ?? '', experiences[0]?.endDate ?? '']
  );

  return (
    <div className='relative'>
      <div className='bg-muted absolute left-0 top-2 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]'>
        <div className='border-primary bg-background absolute left-[-7px] top-0 size-4 rounded-full border-2' />
      </div>
      <div className='flex flex-wrap items-center justify-between mb-3 ml-8'>
        <div>
          <h3 className='text-xl font-medium'>{company}</h3>
        </div>
        <span className='text-xs text-gray-500'>
          {dates[0]} - {dates[1]}
        </span>
      </div>
      <div className='space-y-10'>
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id + experience.startDate}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
};

export const WorkExperience = () => {
  const { ref: sectionRef } = useSectionInView('Experience');

  const experiencesByCompany = groupByCompany(experiences);

  return (
    <section
      ref={sectionRef}
      id='experience'
      className='my-10 scroll-mt-28 md:mb-20'
    >
      <div className='mb-10 text-center'>
        <h2 className='font-heading text-3xl font-semibold'>My Experience</h2>
        <p className='text-muted-foreground mt-3'>
          Professional experience that I have accumulated over several years.
        </p>
      </div>
      <div className='relative max-w-screen-md mx-auto'>
        <div className='relative z-10 space-y-10'>
          {experiencesByCompany.map((group) => (
            <CompanySection
              key={group.company}
              company={group.company}
              experiences={group.experiences}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
