// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Sankar Nagarajan',
  title: 'Microsoft Dynamics 365 Finance & Operations Associate Consultant',
  shortTitle: 'D365 F&O Associate Consultant',
  highlights: ['5+ Years', 'ERP Development', 'Technical Consulting', 'Implementation & Support'],
  tagline:
    'Transforming business requirements into scalable ERP solutions through intelligent development, technical innovation, and enterprise application expertise.',
  location: 'Chennai, Tamil Nadu, India',
  email: 'hnives45@gmail.com',
  phone: '+91 84289-64348',
  phoneHref: '+918428964348',
  resumeFile: 'Sankar-Nagarajan-Resume.pdf',
  links: {
    github: 'https://github.com/sankar-nagarajan-d365',
    // TODO: paste your LinkedIn profile URL here, e.g. 'https://www.linkedin.com/in/your-name/'
    linkedin: 'https://www.linkedin.com/in/sankar-nagarajan-239390147/',
  },
};

export const summary = [
  'Microsoft Dynamics 365 Finance & Operations Associate Consultant with 5+ years of experience across ERP implementation, customization, development, technical support, and enterprise application enhancement.',
  'Experienced in developing and extending D365 F&O components, including tables, forms, SSRS reports, data entities, and X++ customizations. Strong expertise in Chain of Command (CoC), Data Management Framework (DMF), OData integrations, SQL Server, and Azure DevOps.',
  'Experienced in handling customer requirements, conducting technical discussions, troubleshooting complex application issues, performing root cause analysis, coordinating UAT/SIT activities, and delivering effective ERP solutions.',
  'Passionate about technical innovation, process automation, application optimization, and continuously improving enterprise business processes through Microsoft technologies.',
];

export const quickFacts = [
  { value: '5+', label: 'Years in D365 F&O' },
  { value: '5', label: 'Organizations' },
  { value: '4', label: 'Enterprise projects' },
  { value: '2×', label: 'Microsoft certified' },
];

export const certifications = [
  {
    code: 'MB-500',
    title: 'Microsoft Dynamics 365: Finance and Operations Apps Developer',
    level: 'Associate',
  },
  {
    code: 'MB-920',
    title: 'Microsoft Dynamics 365 Finance and Operations Apps (ERP)',
    level: 'Fundamentals',
  },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  project?: string;
  current?: boolean;
  points: string[];
};

export const experience: Job[] = [
  {
    company: 'TVS Next',
    role: 'Associate Consultant – Microsoft Dynamics 365 Finance & Operations',
    period: 'Oct 2025 – Present',
    location: 'Chennai, Tamil Nadu, India',
    current: true,
    points: [
      'Working as a D365 F&O Associate Consultant, supporting enterprise ERP operations and technical requirements.',
      'Handling customer interactions, understanding business requirements, and providing technical solutions.',
      'Monitoring and resolving Tier 1 and Tier 2 ERP support incidents.',
      'Performing technical troubleshooting, defect investigation, and root cause analysis.',
      'Developing and enhancing D365 F&O components, including tables, forms, and SSRS reports.',
      'Working on X++ customizations and extensions to address business-specific requirements.',
      'Supporting data-related issues, integrations, and application functionality.',
      'Coordinating with Tier 3 and Tier 4 technical teams for complex issues.',
      'Managing incidents, service requests, and escalations through JIRA and ServiceNow.',
      'Conducting knowledge-sharing sessions and preparing technical documentation.',
      'Identifying opportunities to improve support processes, application performance, and operational efficiency.',
      'Collaborating with cross-functional teams and global stakeholders to deliver reliable ERP solutions.',
    ],
  },
  {
    company: 'EGDK India Pvt Ltd',
    role: 'Software Developer',
    period: 'Apr 2025 – Jul 2025',
    location: 'Mangalore, Karnataka, India',
    project: 'Asset Management ERP Implementation',
    points: [
      'Implemented an asset management solution integrated with Microsoft Dynamics 365 F&O.',
      'Developed customizations using X++.',
      'Extended standard D365 F&O components.',
      'Developed and maintained SSRS reports.',
      'Prepared Technical Design Documents (TDD).',
      'Performed upgrade validation and regression testing.',
      'Participated in deployment planning and UAT/SIT coordination.',
      'Collaborated with project stakeholders to deliver implementation requirements.',
    ],
  },
  {
    company: 'Infosys',
    role: 'Associate Business Analyst',
    period: 'Jan 2024 – Apr 2025',
    location: 'Chennai, Tamil Nadu, India',
    project: 'Enterprise ERP Implementation',
    points: [
      'Supported D365 F&O implementation and customization activities.',
      'Worked on forms, tables, workflows, and data entities.',
      'Developed and maintained DMF data import/export processes.',
      'Supported integrations and technical enhancements.',
      'Handled ERP support tickets using JIRA and ServiceNow.',
      'Participated in UAT deployments and end-user support sessions.',
      'Collaborated with functional and technical teams.',
    ],
  },
  {
    company: 'Karya Technologies',
    role: 'Microsoft Dynamics 365 F&O Technical Consultant',
    period: 'Aug 2023 – Jan 2024',
    location: 'Chennai, Tamil Nadu, India',
    project: 'ERP Implementation & Application Support',
    points: [
      'Developed X++ customizations and Chain of Command (CoC) extensions.',
      'Customized forms, tables, and data entities.',
      'Developed and migrated SSRS reports.',
      'Implemented OData and DMF-based integrations.',
      'Performed technical troubleshooting and defect analysis.',
      'Prepared Technical Design Documents.',
      'Supported implementation and application enhancement activities.',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    role: 'Microsoft Dynamics 365 F&O Technical Consultant',
    period: 'Nov 2021 – Jun 2023',
    location: 'Chennai, Tamil Nadu, India',
    project: 'Wholesale Distribution ERP Implementation',
    points: [
      'Contributed to D365 F&O implementation and support for a wholesale distribution business.',
      'Developed custom D365 F&O components using X++.',
      'Customized tables, forms, and data entities.',
      'Developed and maintained SSRS reports.',
      'Built and automated DMF processes.',
      'Supported system integrations and data migration activities.',
      'Performed functional and regression testing.',
      'Coordinated UAT/SIT activities using Zephyr.',
      'Resolved technical defects through Root Cause Analysis.',
      'Prepared TDDs and technical documentation.',
    ],
  },
];

export type SkillGroup = { id: string; title: string; icon: string; blurb: string; items: string[] };

export const expertise: SkillGroup[] = [
  {
    id: 'dev',
    title: 'D365 F&O Development',
    icon: 'Code2',
    blurb: 'Extending the application the supported way, without overlayering.',
    items: ['X++ Programming', 'Tables & Table Extensions', 'Forms & Form Extensions', 'SSRS Reports', 'Data Entities', 'Chain of Command (CoC)', 'Event Handlers', 'Customizations & Extensions'],
  },
  {
    id: 'data',
    title: 'Data Management & Integration',
    icon: 'Network',
    blurb: 'Moving data in and out of F&O reliably.',
    items: ['Data Management Framework (DMF/DIXF)', 'BYOD', 'OData Integrations', 'Data Migration', 'SQL Server', 'Database Administration'],
  },
  {
    id: 'reporting',
    title: 'Reporting & Analytics',
    icon: 'BarChart3',
    blurb: 'Business documents and operational reports.',
    items: ['SSRS Reporting', 'Report Data Provider (RDP)', 'Query-based Reporting', 'SQL Queries'],
  },
  {
    id: 'devops',
    title: 'Development & DevOps',
    icon: 'GitBranch',
    blurb: 'From check-in to deployable package.',
    items: ['Visual Studio', 'Azure DevOps', 'Source Control', 'Branching & Check-in', 'Package Generation', 'Lifecycle Services (LCS)'],
  },
  {
    id: 'testing',
    title: 'Testing & Support',
    icon: 'ShieldCheck',
    blurb: 'Keeping releases stable and incidents short.',
    items: ['RSAT', 'Zephyr', 'Regression Testing', 'UAT / SIT', 'Root Cause Analysis', 'Incident Management', 'Technical Troubleshooting'],
  },
  {
    id: 'tools',
    title: 'Enterprise Tools',
    icon: 'Wrench',
    blurb: 'The everyday toolset of an F&O project.',
    items: ['JIRA', 'ServiceNow', 'Postman', 'SQL Server Management Studio (SSMS)'],
  },
];

export const capabilities = [
  { icon: 'Code2', title: 'ERP Development', text: 'Building and extending D365 F&O components to meet business-specific requirements.' },
  { icon: 'Lightbulb', title: 'Technical Innovation', text: 'Developing reusable customizations, improving existing functionality, and exploring efficient approaches to technical challenges.' },
  { icon: 'Users', title: 'Customer & Stakeholder Management', text: 'Understanding customer requirements, conducting technical discussions, and translating business needs into technical solutions.' },
  { icon: 'LifeBuoy', title: 'Enterprise Application Support', text: 'Resolving application issues, managing incidents, identifying root causes, and ensuring operational continuity.' },
  { icon: 'Network', title: 'System Integration', text: 'Working with OData, DMF, BYOD, and data entities to support enterprise integrations.' },
  { icon: 'BadgeCheck', title: 'Quality & Delivery', text: 'Supporting UAT, SIT, regression testing, deployments, and technical documentation.' },
];

export type Project = { name: string; type: string; company: string; overview: string; tech: string[]; contributions: string[] };

export const projects: Project[] = [
  {
    name: 'Asset Management Solution',
    type: 'Implementation',
    company: 'EGDK India',
    overview: 'Implementation of an asset management solution integrated with Microsoft Dynamics 365 Finance & Operations.',
    tech: ['X++', 'SSRS', 'D365 F&O', 'LCS'],
    contributions: ['X++ customizations extending standard components', 'SSRS report development', 'Technical Design Documents', 'Upgrade validation, regression testing and UAT/SIT coordination'],
  },
  {
    name: 'Enterprise ERP Implementation',
    type: 'Implementation',
    company: 'Infosys',
    overview: 'Microsoft Dynamics 365 F&O implementation with customization, data and integration work.',
    tech: ['X++', 'DMF', 'Data Entities', 'JIRA', 'ServiceNow'],
    contributions: ['Forms, tables, workflows and data entities', 'DMF import/export processes', 'Integration and enhancement support', 'UAT deployments and end-user support'],
  },
  {
    name: 'ERP Customization & Support',
    type: 'Implementation & Support',
    company: 'Karya Technologies',
    overview: 'D365 F&O implementation and ongoing application enhancement and support.',
    tech: ['X++', 'CoC', 'SSRS', 'OData', 'DMF'],
    contributions: ['X++ customizations and CoC extensions', 'SSRS report development and migration', 'OData and DMF-based integrations', 'Troubleshooting, defect analysis and TDDs'],
  },
  {
    name: 'Wholesale Distribution ERP Solution',
    type: 'Implementation & Support',
    company: 'Tata Consultancy Services',
    overview: 'D365 F&O implementation and support for a wholesale distribution business.',
    tech: ['X++', 'SSRS', 'DMF', 'Zephyr', 'SQL Server'],
    contributions: ['Custom components, tables, forms and data entities', 'Automated DMF processes and data migration', 'Functional and regression testing with Zephyr', 'Defect resolution through root cause analysis'],
  },
];

export const methodologies = ['Agile', 'Scrum', 'DevOps', 'UAT', 'SIT', 'Regression Testing', 'Root Cause Analysis'];

export const learning = [
  { icon: 'Workflow', name: 'Power Platform', note: 'Low-code apps and automation around Dynamics 365' },
  { icon: 'AppWindow', name: 'Power Apps', note: 'Canvas and model-driven apps' },
  { icon: 'Zap', name: 'Power Automate', note: 'Workflow automation across Microsoft services' },
  { icon: 'PieChart', name: 'Power BI', note: 'Interactive reporting on ERP data' },
  { icon: 'Layers', name: 'Microsoft Fabric', note: 'Unified analytics and data platform' },
  { icon: 'Sparkles', name: 'Generative AI', note: 'Copilot and AI-assisted development' },
  { icon: 'Bot', name: 'AI-powered Business Automation', note: 'Applying AI to business processes' },
];

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'learning', label: 'Learning' },
  { id: 'contact', label: 'Contact' },
];
