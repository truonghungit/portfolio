import React, { useState } from 'react';
import { useSectionInView } from '../active-section/use-section-in-view';
import {
  experiences,
  type Experience,
  type ExperienceProject,
} from '@/data/work-experience';

// Badge for seniority
function SeniorityBadge({ level }: { level: string }) {
  const color =
    level === 'senior'
      ? 'bg-blue-100 text-blue-800'
      : 'bg-gray-100 text-gray-800';
  return (
    <span className={`ml-2 px-2 py-0.5 rounded text-xs font-semibold ${color}`}>
      {level}
    </span>
  );
}

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

// Project Card
const ProjectCard = ({ project }: { project: ExperienceProject }) => {
  return (
    <div className='relative my-4'>
      <div className='border-primary bg-background absolute left-[-59px] top-1 size-2 rounded-full border' />

      <div className='mb-1 font-semibold text-sm'>{project.name}</div>
      <div className='mb-1 text-xs text-gray-600'>{project.problem}</div>
      <ul className='list-disc list-inside text-xs mb-1'>
        {project.actions.map((action: string, idx: number) => (
          <li key={idx}>{action}</li>
        ))}
      </ul>
      <div className='mb-1'>
        {project.impact.map((metric: string, idx: number) => (
          <ImpactBadge key={idx}>{metric}</ImpactBadge>
        ))}
      </div>
      <div className='flex flex-wrap mt-1'>
        {project.techStack.map((tech: string, idx: number) => (
          <TechTag
            key={idx}
            tech={tech}
          />
        ))}
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
      <div className='border-primary bg-background absolute left-[-5px] top-5 size-3 rounded-full border-2' />

      <div className='rounded p-4 shadow-none'>
        <div className='flex flex-wrap items-center justify-between mb-1'>
          <div className='font-medium text-base'>
            {experience.title}
            <SeniorityBadge level={experience.level} />
          </div>
          <div className='text-xs text-gray-500'>
            {experience.startDate} – {experience.endDate}
          </div>
        </div>
        <div className='text-xs text-gray-700 mb-1'>{experience.scope}</div>
        <ul className='list-disc list-inside text-xs mb-2'>
          {experience.responsibilities
            .slice(0, 4)
            .map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
        </ul>
        {/* Projects timeline */}
        <div className='pl-2'>
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
              <button
                className='mt-2 text-xs text-blue-700 underline hover:text-blue-900'
                onClick={() => setShowAll(false)}
                type='button'
              >
                Show less
              </button>
            </>
          )}
        </div>
        {showMore && (
          <button
            className='mt-2 text-xs text-blue-700 underline hover:text-blue-900'
            onClick={() => setShowAll(true)}
            type='button'
          >
            View more projects
          </button>
        )}
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
      domain: experiences[0].domain,
      experiences: experiences.sort((a, b) =>
        b.endDate.localeCompare(a.endDate)
      ),
    };
  });
}

const CompanySection = ({
  company,
  experiences,
  domain,
}: {
  company: string;
  experiences: Experience[];
  domain?: string;
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
      <div className='flex flex-wrap items-center justify-between mb-2 ml-8'>
        <div>
          <h3 className='text-xl font-medium'>{company}</h3>
          {domain && <div className='text-xs text-gray-400'>{domain}</div>}
        </div>
        <span className='text-xs text-gray-500'>
          {dates[0]} - {dates[1]}
        </span>
      </div>
      <div>
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

  const experiencesByCompany = groupByCompany(experiences).sort((a, b) => {
    const aEnd = a.experiences[0]?.endDate || '';
    const bEnd = b.experiences[0]?.endDate || '';
    return bEnd.localeCompare(aEnd);
  });

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
        <div className='relative z-10'>
          {experiencesByCompany.map((group) => (
            <CompanySection
              key={group.company}
              company={group.company}
              domain={group.domain}
              experiences={group.experiences}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
