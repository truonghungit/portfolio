import React, { useState } from 'react';
import { useSectionInView } from '../active-section/use-section-in-view';
import {
  experiences,
  type Experience,
  type ExperienceProject,
} from '@/data/work-experience';
import { Button } from '../ui/button';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { calculateExperienceDuration, cn } from '@/lib/utils';

function ImpactBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className='inline-block bg-emerald-100 text-green-800 font-bold px-2 py-1 rounded text-xs'>
      {children}
    </span>
  );
}

const TechTag = ({ tech }: { tech: string }) => {
  return (
    <span className='inline-block bg-secondary px-2 py-1 rounded text-xs'>
      {tech}
    </span>
  );
};

const ProjectCard = ({ project }: { project: ExperienceProject }) => {
  return (
    <div className='relative'>
      <div className='border-primary bg-background absolute left-[-59px] top-2 size-2 rounded-full border' />

      <div className='space-y-3'>
        <div className='font-semibold'>{project.name}</div>
        <div className='text-gray-600'>{project.description}</div>
        <div className='text-gray-600'>{project.problem}</div>
        <div className='flex flex-wrap gap-2'>
          {project.techStack.map((tech: string, idx: number) => (
            <TechTag
              key={idx}
              tech={tech}
            />
          ))}
        </div>
        <ul className='list-disc list-inside'>
          {project.actions.map((action: string, idx: number) => (
            <li key={idx}>{action}</li>
          ))}
        </ul>
        <div className='flex flex-wrap gap-2'>
          {project.impact.map((metric: string, idx: number) => (
            <ImpactBadge key={idx}>{metric}</ImpactBadge>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({
  experience,
  showCompany,
}: {
  experience: Experience;
  showCompany: boolean;
}) => {
  const [showAll, setShowAll] = useState(false);
  const highlighted = experience.projects.filter((p) => p.highlights);
  const others = experience.projects.filter((p) => !p.highlights);
  const showMore = others.length > 0 && !showAll;

  const duration = calculateExperienceDuration([
    experience.startDate,
    experience.endDate || 'Present',
  ]);

  return (
    <div className='relative pl-8'>
      <div
        className={cn(
          'border-primary bg-background absolute rounded-full border-2',
          showCompany ? 'left-[-7px] top-2 size-4' : 'left-[-5px] top-2 size-3'
        )}
      />

      <div className='mb-3'>
        {showCompany ? (
          <>
            <h3 className='text-xl font-medium'>{experience.title}</h3>
            <div className='flex items-center gap-2'>
              <Building2 className='w-3.5 h-3.5 text-muted-foreground' />
              <span>{experience.company}</span>
            </div>
          </>
        ) : (
          <>
            <h4 className='font-medium text-lg'>{experience.title}</h4>
          </>
        )}

        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <Calendar className='w-3.5 h-3.5' />
          <span>
            {experience.startDate} - {experience.endDate || 'Present'}
          </span>
          <span>({duration})</span>
        </div>
        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <MapPin className='w-3.5 h-3.5' />
          <span>{experience.location} - </span>
          <span>{experience.locationType}</span>
        </div>
      </div>

      <div>
        <ul className='list-disc list-inside mb-2'>
          {experience.responsibilities
            .slice(0, 4)
            .map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
        </ul>

        <div className='pl-6 pt-4 space-y-6'>
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
                className='mt-4'
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
              className='mt-4'
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
  const dates: [string, string] = [
    experiences[experiences.length - 1].startDate,
    experiences[0].endDate || 'Present',
  ];

  const duration = calculateExperienceDuration(dates);

  return (
    <div className='relative'>
      <div className='bg-muted absolute left-0 top-2 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]'></div>

      {experiences.length > 1 && (
        <>
          <div className='border-primary bg-background absolute left-[-7px] top-2 size-4 rounded-full border-2' />

          <div className='mb-3 ml-8'>
            <h3 className='text-xl font-medium'>{company}</h3>
            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
              <Calendar className='w-3.5 h-3.5' />
              <span>
                {dates[0]} - {dates[1]}
              </span>
              <span>({duration})</span>
            </div>
          </div>
        </>
      )}

      <div className='space-y-10'>
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id + experience.startDate}
            experience={experience}
            showCompany={experiences.length === 1}
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
