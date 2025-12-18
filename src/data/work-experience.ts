export type ExperienceProject = {
  id: string;
  name: string;
  description: string;
  problem: string;
  actions: string[];
  impact: string[];
  techStack: string[];
  highlights: boolean;
};

export type Experience = {
  id: string;
  title: string;
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
    company: 'Athena Pros',
    domain: 'Fintech SaaS',
    startDate: 'Jun 2023',
    endDate: 'Oct 2025',
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
        description:
          'Rebuilt the admin dashboard to improve performance and scalability',
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
        description:
          'Created a design system to standardize UI components across products',
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
    id: 'senior-frontend-engineer-at-eztek',
    title: 'Senior Frontend Engineer',
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
        description:
          'Rebuilt the admin dashboard to improve performance and scalability',
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
        description:
          'Rebuilt the admin dashboard to improve performance and scalability',
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
        description:
          'Rebuilt the admin dashboard to improve performance and scalability',
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
        description:
          'Rebuilt the admin dashboard to improve performance and scalability',
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
    id: 'frontend-engineer-at-eztek',
    title: 'Frontend Engineer',
    company: 'EZtek Software',
    startDate: 'Aug 2015',
    endDate: 'Dec 2019',
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
        description:
          'Rebuilt the admin dashboard to improve performance and scalability',
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
  {
    id: 'intern-at-eztek',
    title: 'Intern / On Job Training',
    company: 'EZtek Software',
    startDate: 'May 2015',
    endDate: 'Jul 2015',
    scope:
      'Intensive training in Full-stack development and Scrum methodologies.',
    responsibilities: [],
    projects: [
      {
        id: 'billing-flow',
        name: 'Billing Flow Redesign',
        description:
          'Rebuilt the admin dashboard to improve performance and scalability',
        problem:
          'Complex billing flow caused high user drop-off during checkout',
        actions: [
          'Reworked user flow based on analytics and user feedback',
          'Implemented step-based checkout UI',
          'Optimized form validation and error handling',
        ],
        impact: [],
        techStack: ['React', 'Formik'],
        highlights: true,
      },
    ],
  },
];
