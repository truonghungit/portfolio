export type ExperienceProject = {
  id: string;
  name: string;
  problem: string;
  actions: string[];
  impact: string[];
  techStack: string[];
  highlights: boolean;
};

export type Experience = {
  id: string;
  title: string;
  level: 'senior' | 'mid' | string;
  company: string;
  domain?: string;
  startDate: string;
  endDate: string;
  scope: string;
  responsibilities: string[];
  projects: ExperienceProject[];
};

export const experiences: Experience[] = [
  {
    id: 'senior-fe',
    title: 'Senior Frontend Engineer',
    level: 'senior',
    company: 'Athena Pros',
    domain: 'Fintech SaaS',
    startDate: '2022-01',
    endDate: '2023-06',
    scope: 'Owned frontend architecture and delivery for core product',
    responsibilities: [
      'Owned frontend architecture across core modules',
      'Led frontend delivery for high-impact initiatives',
      'Mentored 3 frontend engineers',
      'Collaborated with product and backend on technical decisions',
    ],
    projects: [
      {
        id: 'admin-dashboard',
        name: 'Admin Dashboard Revamp',
        problem:
          'Legacy dashboard was slow, tightly coupled, and hard to scale across teams',
        actions: [
          'Designed new modular component architecture',
          'Refactored state management to reduce unnecessary re-renders',
          'Led frontend delivery from technical design to production release',
        ],
        impact: [
          'Reduced bundle size by 40%',
          'Improved LCP by 35%',
          'Enabled 5 internal teams to ship features independently',
        ],
        techStack: ['React', 'TypeScript', 'Vite', 'TanStack Query'],
        highlights: true,
      },
      {
        id: 'design-system',
        name: 'Internal Design System',
        problem:
          'Inconsistent UI patterns across products slowed development and QA',
        actions: [
          'Defined core UI principles and component API',
          'Built reusable component library with documentation',
          'Set up visual regression testing',
        ],
        impact: [
          'Cut feature development time by ~25%',
          'Reduced UI-related bugs reported by QA',
        ],
        techStack: ['React', 'Storybook', 'Chromatic'],
        highlights: false,
      },
    ],
  },
  {
    id: 'senior-fe',
    title: 'Senior Frontend Engineer',
    level: 'senior',
    company: 'EZtek Software',
    startDate: '2022-01',
    endDate: '2023-05',
    scope: 'Owned frontend architecture and delivery for core product',
    responsibilities: [
      'Owned frontend architecture across core modules',
      'Led frontend delivery for high-impact initiatives',
      'Mentored 3 frontend engineers',
      'Collaborated with product and backend on technical decisions',
    ],
    projects: [
      {
        id: 'admin-dashboard',
        name: 'Admin Dashboard Revamp',
        problem:
          'Legacy dashboard was slow, tightly coupled, and hard to scale across teams',
        actions: [
          'Designed new modular component architecture',
          'Refactored state management to reduce unnecessary re-renders',
          'Led frontend delivery from technical design to production release',
        ],
        impact: [
          'Reduced bundle size by 40%',
          'Improved LCP by 35%',
          'Enabled 5 internal teams to ship features independently',
        ],
        techStack: ['React', 'TypeScript', 'Vite', 'TanStack Query'],
        highlights: true,
      },
      {
        id: 'design-system',
        name: 'Internal Design System',
        problem:
          'Inconsistent UI patterns across products slowed development and QA',
        actions: [
          'Defined core UI principles and component API',
          'Built reusable component library with documentation',
          'Set up visual regression testing',
        ],
        impact: [
          'Cut feature development time by ~25%',
          'Reduced UI-related bugs reported by QA',
        ],
        techStack: ['React', 'Storybook', 'Chromatic'],
        highlights: true,
      },
      {
        id: 'design-system',
        name: 'Internal Design System',
        problem:
          'Inconsistent UI patterns across products slowed development and QA',
        actions: [
          'Defined core UI principles and component API',
          'Built reusable component library with documentation',
          'Set up visual regression testing',
        ],
        impact: [
          'Cut feature development time by ~25%',
          'Reduced UI-related bugs reported by QA',
        ],
        techStack: ['React', 'Storybook', 'Chromatic'],
        highlights: false,
      },
      {
        id: 'design-system',
        name: 'Internal Design System',
        problem:
          'Inconsistent UI patterns across products slowed development and QA',
        actions: [
          'Defined core UI principles and component API',
          'Built reusable component library with documentation',
          'Set up visual regression testing',
        ],
        impact: [
          'Cut feature development time by ~25%',
          'Reduced UI-related bugs reported by QA',
        ],
        techStack: ['React', 'Storybook', 'Chromatic'],
        highlights: false,
      },
    ],
  },
  {
    id: 'fe',
    title: 'Frontend Engineer',
    level: 'mid',
    company: 'EZtek Software',
    startDate: '2020-01',
    endDate: '2021-12',
    scope: 'Built and maintained user-facing features for core product',
    responsibilities: [
      'Implemented product features from design to production',
      'Maintained existing frontend codebase',
      'Collaborated with backend to integrate APIs',
    ],
    projects: [
      {
        id: 'billing-flow',
        name: 'Billing Flow Redesign',
        problem:
          'Complex billing flow caused high user drop-off during checkout',
        actions: [
          'Reworked user flow based on analytics and user feedback',
          'Implemented step-based checkout UI',
          'Optimized form validation and error handling',
        ],
        impact: [
          'Reduced checkout drop-off rate by 18%',
          'Increased successful payments',
        ],
        techStack: ['React', 'Formik'],
        highlights: true,
      },
    ],
  },
];
