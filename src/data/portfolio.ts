export type Palette = { from: string; via: string; to: string; accent: string };

const assetUrl = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;

export const profile = {
  fullName: 'Vijayanand G',
  displayName: 'Vijayanand',
  firstName: 'VIJAYANAND',
  seriesTag: 'V SERIES',
  originalLabel: 'A VIJAYANAND ORIGINAL',
  role: 'Senior Software Developer',
  experienceYears: '3+',
  tagline: ['Oracle Retail Xstore', 'Java / JEE', 'Retail POS'],
  intro:
    'Senior Software Developer with 3+ years of experience customizing and integrating Oracle Retail Xstore. Focused on transaction flows, payments, discounts, coupons, and reliable POS operations across 100+ retail stores.',
  location: 'India',
  email: 'vijayanand.developer@gmail.com',
  phone: '+91 7975187121',
  links: {
    linkedin: 'https://www.linkedin.com/in/vijayanand-g-aa2136229',
    github: 'https://github.com/vijayanand321',
    portfolio: 'https://vijayanand321portfolio.firebaseapp.com/',
  },
  resumePdf: assetUrl('Vijayanand_Resume.pdf'),
  portrait: {
    src: assetUrl('vijayanand-photo-4.jpg'),
    alt: 'Vijayanand in a dark suit and tie',
  },
  interests: ['Oracle Retail Xstore', 'Retail integrations', 'POS performance'],
};

export const photoGallery = [
  {
    src: assetUrl('vijayanand-photo-1.jpg'),
    alt: 'Black-and-white portrait of Vijayanand wearing sunglasses',
    label: 'In monochrome',
  },
  {
    src: assetUrl('vijayanand-photo-2.jpg'),
    alt: 'Cinematic side-profile portrait of Vijayanand',
    label: 'Studio portrait',
  },
  {
    src: assetUrl('vijayanand-photo-3.jpg'),
    alt: 'Illustrated portrait of Vijayanand against a red backdrop',
    label: 'Illustrated',
  },
];

export const education = [
  {
    school: 'DR TTIT',
    place: 'KGF, India',
    degree: 'Bachelor of Engineering in Electronics and Communication Engineering',
    period: 'July 2022',
    score: '',
  },
];

export const experience = [
  {
    company: 'Valtech',
    role: 'Senior Software Developer',
    place: 'India',
    period: 'October 2026 – Present',
    points: [
      'Design and enhance Oracle Retail Xstore POS functionality with Java and JEE, including transaction processing, tender handling, promotions, and store configuration.',
      'Develop OpChain, DTX, and Auth Framework enhancements and integrate Xstore with retail systems through REST APIs and configuration-driven interfaces.',
      'Lead delivery from requirements and technical design through code reviews, testing, defect resolution, and deployment support.',
    ],
  },
  {
    company: 'OLR',
    role: 'Associate Developer',
    place: 'Bengaluru, India',
    period: 'October 2025 – October 2026',
    points: [
      'Developed POS features for tender handling, promotions, and configurable business parameters.',
      'Optimized critical transaction flows, improving average response time by 20%.',
      'Improved Xstore integrations through REST APIs and DTX configuration; coordinated design reviews, UAT, and production deployments.',
    ],
  },
  {
    company: 'OLR',
    role: 'Service Analyst',
    place: 'Bengaluru, India',
    period: 'August 2023 – October 2025',
    points: [
      'Customized Oracle Retail Xstore for 100+ retail stores, improving operational efficiency by 15%.',
      'Built surcharge, discount, coupon, and payment enhancements that reduced transaction errors by 60%.',
      'Improved receipt and promotion experiences by 25%, reduced update downtime by 30%, and supported the Xstore v20-to-v25 upgrade.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  label: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'grid';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'assisted-selling-refund',
    title: 'Assisted Selling Auto Refund',
    label: 'BTA',
    genre: 'Oracle Xstore · Payments · Integrations',
    logline: 'Automated multi-tender refunds for Assisted Selling orders, including gift-card and e-gift-card workflows.',
    stack: ['Java', 'Oracle Xstore', 'MuleSoft REST APIs', 'OMS'],
    build: [
      'Implemented refunds across credit cards, gift cards, and e-gift cards, processing tenders in their original payment sequence with fallback handling for failures.',
      'Integrated Xstore with MuleSoft REST APIs to reload gift cards, issue e-gift cards, and synchronize refund details with the Order Management System.',
      'Added refund tracking, exception handling, and database support for e-gift-card lifecycle management and duplicate-allocation prevention.',
    ],
    features: [
      'Multi-tender refunds across card and gift-card payments',
      'Original-tender sequencing with failure fallback',
      'MuleSoft REST API and Order Management System integration',
      'Automated refund tracking and exception reporting',
      'E-gift-card lifecycle and duplicate-allocation controls',
    ],
    metrics: [],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'employee-discount-governance',
    title: 'Employee Discount Controls',
    label: 'Burlington',
    genre: 'Oracle Xstore · Compliance · POS',
    logline: 'Configurable year-to-date and event spend controls for employee discounts across retail POS workflows.',
    stack: ['Java', 'Oracle Xstore', 'Xcenter', 'SQL'],
    build: [
      'Implemented configurable year-to-date and event spend caps, tracking employee spend in Xcenter and validating balances across sales, returns, layaways, cancellations, and post-voids.',
      'Built resilient Xstore-to-Xcenter synchronization with offline queuing, replication replay, and suspend/resume balance revalidation.',
      'Delivered live employee-balance receipts and configurable discount limits across more than 100 stores.',
    ],
    features: [
      'Year-to-date and event-based employee spend caps',
      'Real-time POS validation across sale and return workflows',
      'Offline-resilient synchronization with Xcenter',
      'Suspend/resume discount and balance revalidation',
      'Live employee balances on transaction receipts',
    ],
    metrics: [{ value: '100+', label: 'retail stores' }],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'grid',
  },
  {
    id: 'aml-compliance',
    title: 'Anti-Money Laundering Enhancements',
    label: 'BTA',
    genre: 'Oracle Xstore · Compliance · POS',
    logline: 'Configurable compliance workflows for high-value cash and gift-card transactions in Oracle Xstore.',
    stack: ['Java', 'Oracle Xstore', 'Xstore / XAdmin', 'SQL'],
    build: [
      'Implemented configurable cash and gift-card thresholds, rolling transaction checks, customer identification, and AML verification workflows.',
      'Added gift-card redemption eligibility checks, manager authorization, customer onboarding prompts, and transaction-state validation.',
      'Extended POSLog transaction properties for compliance auditing and downstream integration, with database-driven settings that can be changed without code updates.',
    ],
    features: [
      'Configurable cash and gift-card thresholds',
      'Rolling checks across linked customer transactions',
      'Customer search and onboarding workflows',
      'Manager authorization and POS state validation',
      'AML-specific POSLog properties for audit and reporting',
    ],
    metrics: [],
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'retail-scale',
    title: '100+ Stores',
    org: 'Oracle Retail Xstore',
    detail: 'Delivered end-to-end configuration, implementation, and support across large-scale retail deployments.',
    laurel: 'Retail Scale',
  },
  {
    id: 'transaction-errors',
    title: '60% Fewer Errors',
    org: 'POS Transaction Flows',
    detail: 'Reduced transaction errors through surcharge, discount, coupon, and payment enhancements.',
    laurel: 'Reliability',
  },
  {
    id: 'response-time',
    title: '20% Faster',
    org: 'Critical Transaction Flows',
    detail: 'Improved average response time through performance optimization.',
    laurel: 'Performance',
  },
  {
    id: 'update-downtime',
    title: '30% Less Downtime',
    org: 'System Updates',
    detail: 'Optimized replication and backend logic to reduce downtime during updates.',
    laurel: 'Stability',
  },
  {
    id: 'xstore-upgrade',
    title: 'Xstore v20 → v25',
    org: 'Version Upgrade',
    detail: 'Supported migration of custom modules with backward compatibility and regression testing.',
    laurel: 'Modernization',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  {
    issuer: 'Oracle',
    name: 'Xstore Point of Service Next-Gen Technical Implementation Specialist Assessment (2023)',
    link: assetUrl('Oracle_Retail_Xstore_Technical_Implementation.pdf'),
  },
  {
    issuer: 'Oracle',
    name: 'Xstore Point of Sale Functional Implementation Specialist Assessment (2023)',
    link: assetUrl('Oracle_Retail_Xstore_Functional_Implementation.pdf'),
  },
  { issuer: 'JSpiders Bengaluru', name: 'Java Full Stack Development (2022)' },
  {
    issuer: 'JSpiders Bengaluru',
    name: 'Core Java, SQL, Web Technology & Advanced Java (2023)',
    link: assetUrl('JSpiders_Core_Java_SQL_Web_Technology.png'),
  },
  { issuer: 'Udemy', name: 'Spring Boot and REST API (2022)' },
  {
    issuer: 'Forage · JPMorgan Chase',
    name: 'Software Engineering Virtual Experience (May 2023)',
    link: assetUrl('JPMorgan_Software_Engineering_Virtual_Experience.pdf'),
  },
  {
    issuer: 'LinkedIn Learning',
    name: 'Agile Software Development (August 2025)',
    link: assetUrl('LinkedIn_Agile_Software_Development.jpg'),
  },
  {
    issuer: 'HackerRank',
    name: 'Java (Basic) Skill Certification (May 2024)',
    link: assetUrl('HackerRank_Java_Basic.png'),
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'xstore',
    title: 'Oracle Xstore',
    subtitle: 'POS modules and retail workflows',
    skills: [
      { name: 'OpChain Framework', mono: 'OC' },
      { name: 'DTX Framework', mono: 'DX' },
      { name: 'Auth Framework', mono: 'Au' },
      { name: 'Tender / Payment Integration', mono: 'TP' },
      { name: 'Receipt Customization', mono: 'Rc' },
      { name: 'Coupon Management', mono: 'Cp' },
      { name: 'Discount Handling', mono: 'Ds' },
      { name: 'Surcharge Implementation', mono: 'Sc' },
      { name: 'Prompt Till Count', mono: 'Pt' },
      { name: 'Device Configuration', mono: 'Dc' },
      { name: 'Replication', mono: 'Rp' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java and enterprise development',
    skills: [
      { name: 'Java (Core, JEE)', mono: 'Jv', note: 'Primary' },
      { name: 'SQL', mono: 'SQ' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & APIs',
    subtitle: 'Application and service integration',
    skills: [
      { name: 'Spring Boot', mono: 'SB' },
      { name: 'Hibernate', mono: 'Hb' },
      { name: 'JPA', mono: 'JP' },
      { name: 'RESTful APIs', mono: 'Ap' },
      { name: 'React.js', mono: 'Re' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Retail data and persistence',
    skills: [
      { name: 'Oracle', mono: 'Or' },
      { name: 'SQL Server', mono: 'SS' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Development and delivery',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Jira', mono: 'Ji' },
      { name: 'Eclipse', mono: 'Ec' },
      { name: 'IntelliJ IDEA', mono: 'IJ' },
      { name: 'Maven', mono: 'Mv' },
      { name: 'Tomcat', mono: 'Tc' },
    ],
  },
  {
    id: 'practices',
    title: 'Practices',
    subtitle: 'Engineering fundamentals',
    skills: [
      { name: 'OOP', mono: 'Oo' },
      { name: 'Design Patterns', mono: 'Dp' },
      { name: 'Agile', mono: 'Ag' },
      { name: 'Debugging', mono: 'Db' },
      { name: 'Unit Testing', mono: 'Ut' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Java (Core, JEE)': ['Oracle Retail Xstore development', 'Spring Boot and REST API certification'],
  SQL: ['Xcenter spend tracking', 'Oracle and SQL Server databases'],
  'OpChain Framework': ['Xstore POS workflow enhancements'],
  'DTX Framework': ['Xstore and backend retail integrations'],
  'Auth Framework': ['Xstore framework-level enhancements'],
  'RESTful APIs': ['MuleSoft integration for refunds and OMS synchronization'],
  'Spring Boot': ['Spring Boot and REST API certification'],
  'Tender / Payment Integration': ['Assisted Selling auto refunds', 'POS payment enhancements'],
  'Discount Handling': ['Employee discount spend controls'],
  Replication: ['Offline-resilient Xstore and Xcenter synchronization'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2022',
    synopsis: 'An engineering degree and the beginning of a career in software development.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Electronics & Communication',
        description: 'Completed a Bachelor of Engineering at DR TTIT in KGF, India.',
        tags: ['B.E.', 'Electronics and Communication'],
        runtime: 'July 2022',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Java Full Stack',
        description: 'Completed Java Full Stack Development training at JSpiders Bengaluru.',
        tags: ['Java', 'Full Stack'],
        runtime: '2022',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Retail Systems',
    period: '2023 – 2025',
    synopsis: 'Oracle Retail Xstore service and POS customization for enterprise retail.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Service Analyst',
        description: 'Customized Xstore for 100+ stores and delivered transaction, payment, coupon, and receipt enhancements.',
        tags: ['Oracle Xstore', 'Java', 'POS'],
        runtime: 'Aug 2023 – Oct 2025',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Reliable Transactions',
        description: 'Reduced transaction errors by 60% and update downtime by 30% through POS and backend improvements.',
        tags: ['Payments', 'Replication', 'Support'],
        runtime: 'OLR',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Better POS',
    period: '2025 – 2026',
    synopsis: 'New POS features, API integration, and performance optimization as an Associate Developer.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Associate Developer',
        description: 'Developed tender handling, promotional logic, and configurable POS business parameters.',
        tags: ['Java', 'Xstore', 'Payments'],
        runtime: 'Oct 2025 – Oct 2026',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Performance & Integration',
        description: 'Improved average response time by 20% and enhanced REST API and DTX integrations.',
        tags: ['Performance', 'REST', 'DTX'],
        runtime: 'OLR',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Enterprise Xstore',
    period: '2026 – Present',
    synopsis: 'Senior Software Developer at Valtech, designing and enhancing Oracle Retail Xstore solutions.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Senior Software Developer',
        description: 'Delivering Xstore transaction, tender, promotion, and configuration enhancements with Java and JEE.',
        tags: ['Valtech', 'Java / JEE', 'Oracle Xstore'],
        runtime: 'Oct 2026 – Present',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'Retail Integrations',
        description: 'Connecting POS workflows with backend retail systems through REST APIs and configuration-driven interfaces.',
        tags: ['REST APIs', 'DTX', 'Integrations'],
        runtime: 'In progress',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Specialization', title: 'Oracle Xstore', detail: 'POS customization and integration', palette: crimson },
  { label: 'Payment workflows', title: 'Auto Refunds', detail: 'Multi-tender Assisted Selling returns', palette: amber },
  { label: 'Retail reach', title: '100+ Stores', detail: 'Xstore implementation and support', palette: ocean },
  { label: 'Transaction reliability', title: '60% Fewer Errors', detail: 'Payment and POS enhancements', palette: jade },
  { label: 'Performance', title: '20% Faster', detail: 'Average response time on critical flows', palette: violet },
  { label: 'Employee controls', title: 'Spend Caps', detail: 'Year-to-date and event discount limits', palette: ocean },
  { label: 'Compliance', title: 'AML Workflows', detail: 'Configurable transaction verification', palette: crimson },
  { label: 'Modernization', title: 'Xstore v25', detail: 'Supported v20-to-v25 upgrade', palette: amber },
  { label: 'Engineering', title: 'Java / JEE', detail: 'Enterprise POS and backend development', palette: violet },
  { label: 'Current role', title: 'Valtech', detail: 'Senior Software Developer', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Experience',
    title: '3+ Years in Retail Tech',
    lines: ['Oracle Retail Xstore customization and integration', 'Valtech · Senior Software Developer'],
    chips: ['Java', 'JEE', 'Xstore'],
  },
  {
    kicker: 'Specialization',
    title: 'Retail POS',
    lines: ['Transaction processing, tenders, payments, promotions', 'Xstore configuration, OpChain, DTX, and Auth Framework'],
    chips: ['Payments', 'Discounts', 'Coupons'],
  },
  {
    kicker: 'Impact',
    title: 'Built for Scale',
    lines: ['Xstore implementation and support across 100+ retail stores', 'Reduced transaction errors by 60%'],
  },
  {
    kicker: 'Projects',
    title: 'Three Enterprise Builds',
    lines: ['Assisted Selling multi-tender auto refunds', 'Employee discount spend controls', 'Configurable AML enhancements'],
  },
  {
    kicker: 'Performance',
    title: 'Faster, More Reliable POS',
    lines: ['20% faster average response time on critical transaction flows', '30% less downtime during system updates'],
  },
  {
    kicker: 'Education',
    title: 'Electronics & Communication',
    lines: ['Bachelor of Engineering · DR TTIT, KGF', 'July 2022'],
    chips: ['Java Full Stack', 'Spring Boot', 'REST APIs'],
  },
];

export type ProfileId = 'vijayanand' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'vijayanand',
    name: 'Vijayanand',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot · Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons · Career timeline`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Project Highlights · Oracle Xstore`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Career Highlights', meta: 'Selected work and impact', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Impact', card: 'Project Impact', meta: `${achievements.length} Highlights · ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume · View & download', palette: violet },
};
