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
  location: string;
  locationType: 'remote' | 'onsite' | 'hybrid';
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
    location: 'Ho Chi Minh City, Vietnam',
    locationType: 'onsite',
    responsibilities: [
      'Owned frontend architecture across core modules',
      'Led frontend delivery for high-impact initiatives',
      'Mentored 5 frontend developers',
      'Collaborated with product and backend on technical decisions',
    ],
    projects: [
      {
        id: 'iris',
        name: 'IRIS',
        description:
          'The IRIS is an Integrated Resources & Intelligence System developed for a Vietnam-based investment management company. By consolidating diverse data sources, it empowers advanced research analysis and enables data-driven, more effective portfolio management.',
        problem:
          'Legacy dashboard was slow, tightly coupled, and hard to scale across teams',
        actions: [
          'Implemented micro-frontend architecture using Module Federation to migrate legacy applications and develop new features, improving scalability, easing integration, and enabling independent team deployments.',
          'Developed and maintained an internal Angular library (authentication, form handling, reusable components) adopted by multiple teams, reducing duplicated code and accelerating development cycles.',
          'Collaborated with product managers, business analysts, designers, and cross-functional teams to maintain existing systems and deliver new features.',
          'Reviewed code, provided constructive feedback, and supported colleagues in resolving complex technical issues, resulting in improved code quality and faster project delivery. ',
        ],
        impact: [
          'Reduced bundle size by 40%',
          'Improved LCP by 35%',
          'Enabled 4 internal teams to ship features independently',
        ],
        techStack: [
          'TypeScript',
          'Angular 15+',
          'PrimeNg',
          'NgRx',
          'RxJS',
          'Module Federation',
          'ChartJS',
          'Excel JS',
        ],
        highlights: true,
      },
    ],
  },
  {
    id: 'senior-frontend-engineer-at-eztek',
    title: 'Senior Frontend Engineer',
    company: 'EZtek Software',
    startDate: 'Jan 2020',
    endDate: 'May 2023',
    location: 'Ho Chi Minh City, Vietnam',
    locationType: 'onsite',
    responsibilities: [
      'Owned frontend architecture across core modules',
      'Led frontend delivery for high-impact initiatives',
      'Mentored 5 frontend developers',
      'Collaborated with product and backend on technical decisions',
    ],
    projects: [
      {
        id: 'career-pathway',
        name: 'Career Pathway',
        description:
          'Career Pathway is a platform that makes career exploration simple, engaging, and effective. Whether it’s helping a high school student discover their dream job, a professional showcasing their expertise, or a business attracting top talent. ',
        problem:
          'Legacy dashboard was slow, tightly coupled, and hard to scale across teams',
        actions: [
          'Designed and set up the project architecture from scratch, ensuring scalability and maintainability',
          'Delivered new features efficiently while maintaining existing systems through close collaboration with the team',
          'Conducted technical reviews, mentored junior developers, and improved overall code quality',
          'Defined the technical roadmap and drove adherence to best practices across the team ',
          'Troubleshot and resolved complex technical challenges, reducing development bottlenecks',
        ],
        impact: [
          'Reduced bundle size by 40%',
          'Improved LCP by 35%',
          'Enabled 5 internal teams to ship features independently',
        ],
        techStack: [
          'TypeScript',
          'Angular',
          'Angular Material',
          'Angular CDK',
          'NgRx',
        ],
        highlights: true,
      },
      {
        id: 'accountia',
        name: 'Accountia',
        description:
          'An Enterprise Resource Planning system to centralize data and streamline operations across departments such as warehousing, purchasing, sales, and accounting.',
        problem:
          'Inconsistent UI patterns across products slowed development and QA',
        actions: [
          'Built and maintained the project architecture, ensuring scalability and consistency across modules',
          'Implemented UI features and standardized the component library with Storybook, enabling alignment across multiple product teams',
          'Conducted code reviews, provided technical feedback, and mentored junior engineers, improving code quality and team efficiency ',
          'Verified and tracked tasks for team members to ensure timely and high-quality delivery',
          'Performed unit and end-to-end testing using Jest and Cypress to maintain product reliability ',
        ],
        impact: [
          'Cut feature development time by ~25%',
          'Reduced UI-related bugs reported by QA',
        ],
        techStack: [
          'TypeScript',
          'Angular',
          'Angular Material',
          'Angular CDK',
          'NgRx',
          'RxJS',
          'Storybook',
          'Jest',
          'Cypress',
        ],
        highlights: true,
      },
      {
        id: 'ui-library-online-teaching-platform',
        name: 'UI library for Online teaching platform',
        description:
          'The online teaching platform is a comprehensive digital teaching and learning toolkit that has become an integral part of the practice of thousands of teachers worldwide. It assists with differentiation, student engagement, feedback, and assessment. Its rich data insights are perfect for tracking student progress.',
        problem:
          'Inconsistent UI patterns across products slowed development and QA',
        actions: [
          'Migrated existing components from Vue.js to React ',
          'Developed new UI components to support product features and enhance user experience ',
        ],
        impact: [
          'Cut feature development time by ~25%',
          'Reduced UI-related bugs reported by QA',
        ],
        techStack: [
          'React',
          'Vue',
          'Storybook',
          'Tailwind CSS',
          'Jest',
          'Rollup',
        ],
        highlights: false,
      },
      {
        id: 'rate-it',
        name: 'RateIt',
        description:
          'A rating system, intelligent and dynamic micro surveys, available across all channels, ensures you are really listening to your customer at every meaningful moment, without ever delivering an annoying survey.',
        problem:
          'Inconsistent UI patterns across products slowed development and QA',
        actions: [
          'Maintain existing systems and deliver new features by streamlining workflows and reducing deployment times',
          'Develop and execute comprehensive unit tests to ensure code reliability and functionality.',
        ],
        impact: [
          'Cut feature development time by ~25%',
          'Reduced UI-related bugs reported by QA',
        ],
        techStack: ['TypeScript', 'Angular'],
        highlights: false,
      },
    ],
  },
  {
    id: 'frontend-engineer-at-eztek',
    title: 'Frontend Engineer',
    company: 'EZtek Software',
    startDate: 'May 2015',
    endDate: 'Dec 2019',
    location: 'Ho Chi Minh City, Vietnam',
    locationType: 'onsite',
    responsibilities: [
      'Implemented product features from design to production',
      'Maintained existing frontend codebase',
      'Collaborated with backend to integrate APIs',
    ],
    projects: [
      {
        id: 'job-marketplace',
        name: 'Job Marketplace',
        description:
          'An online job marketplace connecting people who have jobs that need to be done with those looking for work in the UK market.',
        problem:
          'Complex billing flow caused high user drop-off during checkout',
        actions: [
          'Implemented UI features efficiently',
          'Performed debugging and optimized components for better performance',
        ],
        impact: [
          'Reduced checkout drop-off rate by 18%',
          'Increased successful payments',
        ],
        techStack: ['React', 'React Router', 'Redux', 'Bootstrap'],
        highlights: true,
      },
      {
        id: 'hyre-car',
        name: 'Hyre Car',
        description: 'Rent your car out to others for extra income.',
        problem:
          'Complex billing flow caused high user drop-off during checkout',
        actions: [
          'Implemented UI features efficiently',
          'Performed debugging and optimized components for better performance',
        ],
        impact: [
          'Reduced checkout drop-off rate by 18%',
          'Increased successful payments',
        ],
        techStack: ['PHP', 'JavaScript', 'jQuery', 'Bootstrap'],
        highlights: true,
      },
    ],
  },
];
