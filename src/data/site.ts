import { Globe, Smartphone, Cloud, Cpu, Database, Factory, type LucideIcon } from 'lucide-react';

/*
  Company details used across the site. Edit these in one place.
  Links left as an empty string are hidden on the site until you fill them in.
*/
export const company = {
  name: 'Ketha24',
  email: 'ketha24x7@gmail.com',
  // First number came from the old site and was never confirmed.
  // TODO: verify it still reaches you, or drop it and keep the second only.
  phones: ['+94 77 109 1391', '+94 77 314 3831'],
  location: 'Kaduwela, Sri Lanka',
  timeZone: 'Asia/Colombo',
  social: {
    linkedin: '', // e.g. 'https://www.linkedin.com/company/ketha24'
    instagram: '', // e.g. 'https://www.instagram.com/ketha24'
  },
  legal: {
    privacy: '', // link to a Privacy Policy page when you have one
    terms: '', // link to a Terms of Service page when you have one
  },
};

export const stats = [
  { value: '10+', label: 'Projects delivered' },
  { value: '6+', label: 'Happy clients' },
  { value: '5+', label: 'Years of experience' },
];

export type Service = {
  id: string;
  icon: LucideIcon;
  chip: string;
  title: string;
  description: string;
  features: string[];
  stack: string[];
  /** 16:9 illustration in /public/images/services/. */
  image: string;
};

export const services: Service[] = [
  {
    id: 'web',
    icon: Globe,
    chip: 'A website or web app',
    title: 'Web Solutions',
    description: 'Custom web platforms, progressive web apps and enterprise-grade e-commerce, built to scale.',
    features: ['Custom platforms', 'E-commerce', 'PWAs'],
    stack: ['React', 'Next.js', 'Angular', 'Node.js', 'Tailwind CSS'],
    image: '/images/services/web.png',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    chip: 'A mobile app',
    title: 'Mobile Apps',
    description: 'Native and cross-platform apps for iOS and Android with polished, intuitive UI/UX.',
    features: ['iOS development', 'Android apps', 'Cross-platform'],
    stack: ['React Native', 'TypeScript', 'Supabase'],
    image: '/images/services/mobile.png',
  },
  {
    id: 'cloud',
    icon: Cloud,
    chip: 'Cloud & infrastructure',
    title: 'Cloud & IT Strategy',
    description: 'Cloud infrastructure setup, migration and strategic IT consulting for your business.',
    features: ['AWS / Azure / GCP', 'DevOps', 'Consulting'],
    stack: ['AWS', 'Azure', 'Docker'],
    image: '/images/services/cloud.png',
  },
  {
    id: 'ai',
    icon: Cpu,
    chip: 'AI & automation',
    title: 'AI Driven Solutions',
    description: 'Generative AI that automate workflows, sharpen decisions and give you an edge.',
    features: ['AI integration', 'Generative AI', 'Automation'],
    stack: ['Node.js','Python', 'FastAPI', 'PostgreSQL'],
    image: '/images/services/ai.png',
  },
  {
    id: 'data',
    icon: Database,
    chip: 'Data & dashboards',
    title: 'Data Solutions',
    description: 'Data architecture, analytics pipelines and business intelligence dashboards.',
    features: ['Analytics', 'BI dashboards', 'Data engineering'],
    stack: ['PostgreSQL', 'MySQL', 'DynamoDB', 'MongoDB', 'GraphQL'],
    image: '/images/services/data.png',
  },
  {
    id: 'erp',
    icon: Factory,
    chip: 'An ERP system',
    title: 'ERP Solutions',
    description:
      'End-to-end systems that run the business itself: production, inventory, employees and payroll in one place instead of scattered spreadsheets.',
    features: ['Process management', 'Inventory', 'Payroll & HR'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    image: '/images/services/erp.png',
  },
];

export const techs = [
  'React', 'Next.js', 'Angular', 'TypeScript', 'Node.js', 'Python',
  'NestJS', 'FastAPI', 'AWS', 'Azure', 'Docker',
  'GraphQL', 'PostgreSQL', 'MySQL', 'MariaDB', 'React Native', 
  'Tailwind CSS', 'Supabase',
];

// TODO: check these steps match how your team works
export const processSteps = [
  { title: 'Discover', text: 'We learn your goals, users and constraints, then agree on scope, timeline and budget.' },
  { title: 'Design', text: 'Architecture and UI/UX designed together, so what looks right is also built to scale.' },
  { title: 'Build', text: 'Agile sprints with working software to review every cycle. No black boxes.' },
  { title: 'Launch & support', text: "We ship, monitor and keep improving. Support doesn't stop when the project does." },
];

export const values = [
  'Innovation-driven solutions',
  'Client-centric approach',
  'Transparent communication',
  'Quality-first development',
  'Continuous improvement',
  'Long-term partnerships',
];

export const highlights = [
  { key: '10+', title: 'Proven results', text: 'Successful projects delivered across many industries.' },
  { key: 'Agile', title: 'Agile approach', text: 'Rapid iterations and continuous delivery for faster time-to-market.' },
  { key: 'Team', title: 'Expert team', text: 'Skilled developers, designers and strategists dedicated to your success.' },
];

/* ------------------------------------------------------------------ *
 * PROOF / CREDIBILITY CONTENT
 *
 * !! EVERYTHING BELOW IS PLACEHOLDER COPY !!
 * These are structurally correct examples, not real client work. Replace
 * every entry with verified detail before this goes live — publishing
 * invented case studies, metrics or quotes as if they were real is both
 * dishonest and, for testimonials, generally unlawful.
 * Delete any section you cannot yet back with something true: an honest
 * short site beats a padded one.
 * ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  category: string;
  title: string;
  client: string;
  summary: string;
  /** Modules actually delivered, in the client's own terms. */
  capabilities: string[];
  /** 16:9 cover in /public/images/work/. */
  image: string;
};

export const projectCategories = ['All', 'ERP & operations', 'Web platforms', 'Mobile apps', 'Cloud & data'];

/*
  Real engagements. Clients are described by sector rather than named —
  add real names (and logos) once you have written permission.

  Deliberately no outcome metrics: quoting numbers we have not measured
  would be worse than quoting none. If you can evidence a figure —
  hours saved, order volume, error rate — tell me and I'll add a metrics
  row to these cards.
*/
export const projects: Project[] = [
  {
    slug: 'service-centre-platform',
    category: 'ERP & operations',
    title: 'Service centre management platform',
    client: 'Vehicle service centre',
    summary:
      'A single web platform to run a service centre end to end. Service records, job cards, staff, salaries and parts inventory all live in one system instead of scattered books and spreadsheets.',
    capabilities: ['Service records', 'Job management', 'Employees', 'Salaries', 'Inventory'],
    image: '/images/work/service-centre-platform.png',
  },
  {
    slug: 'garment-production-system',
    category: 'ERP & operations',
    title: 'Garment production tracking system',
    client: 'Garment factory',
    summary:
      'End-to-end production visibility from purchasing through cutting to finished product, with inventory management, an admin portal and a companion mobile app for use on the factory floor.',
    capabilities: ['Purchasing', 'Cut-to-finish tracking', 'Inventory', 'Admin portal', 'Mobile app'],
    image: '/images/work/garment-production-system.png',
  },
  {
    slug: 'ceramics-erp',
    category: 'ERP & operations',
    title: 'ERP for a ceramics manufacturer',
    client: 'Ceramics manufacturer',
    summary:
      'A full ERP covering the manufacturing process alongside employee management and salary processing, replacing disconnected tools with one source of truth.',
    capabilities: ['Process management', 'Employee management', 'Salaries', 'Reporting'],
    image: '/images/work/ceramics-erp.png',
  },
  {
    slug: 'ecommerce-platform',
    category: 'Web platforms',
    title: 'E-commerce platform with delivery tracking',
    client: 'Online retailer',
    summary:
      'A storefront that handles the whole order lifecycle: product listings, delivery, status updates at every stage, customer messaging and integrated payments.',
    capabilities: ['Product listings', 'Delivery', 'Status updates', 'Messaging', 'Payments'],
    image: '/images/work/ecommerce-platform.png',
  },
  {
    slug: 'jewellery-showcase',
    category: 'Web platforms',
    title: 'Jewellery showcase website',
    client: 'Jewellery retailer',
    summary:
      'A presentation-led website built around the products, giving each piece the image quality and detail that high-value retail needs.',
    capabilities: ['Product showcase', 'Responsive gallery', 'Brand-led design'],
    image: '/images/work/jewellery-showcase.png',
  },
  {
    slug: 'modern-web-applications',
    category: 'Web platforms',
    title: 'Modern web applications for business',
    client: 'Various sectors',
    summary:
      'Modern, responsive web applications built for companies replacing dated internal tools and public-facing sites with something their teams and customers will actually use.',
    capabilities: ['Custom build', 'Responsive design', 'Modern stack'],
    image: '/images/work/modern-web-applications.png',
  },
  {
    slug: 'internal-social-app',
    category: 'Mobile apps',
    title: 'Internal social platform',
    client: 'Corporate client',
    summary:
      'A private social app for staff use only, with chat, post sharing and reels — the familiar shape of a social feed, kept entirely inside the organisation.',
    capabilities: ['Chat', 'Post sharing', 'Reels', 'Internal access only'],
    image: '/images/work/internal-social-app.png',
  },
  {
    slug: 'parent-student-app',
    category: 'Mobile apps',
    title: 'Parent and student community app',
    client: 'Education sector',
    summary:
      'A managed social app connecting parents and students, built so a school community can share and communicate in a space that is moderated rather than open.',
    capabilities: ['Social feed', 'Parent and student channels', 'Content management'],
    image: '/images/work/parent-student-app.png',
  },
  {
    slug: 'tuition-class-app',
    category: 'Mobile apps',
    title: 'Tuition class management app',
    client: 'Tuition provider',
    summary:
      'A mobile app that keeps students, teachers and classes organised in one place, replacing the registers and message threads that tuition providers usually run on.',
    capabilities: ['Student management', 'Teacher management', 'Class administration'],
    image: '/images/work/tuition-class-app.png',
  },
  {
    slug: 'cloud-database-migration',
    category: 'Cloud & data',
    title: 'Legacy database migration to cloud',
    client: 'Existing client systems',
    summary:
      'Moved ageing databases off legacy infrastructure onto cloud-based solutions, with the data intact and the systems that depend on it still running.',
    capabilities: ['Schema migration', 'Data integrity', 'Cloud infrastructure'],
    image: '/images/work/cloud-database-migration.png',
  },
];

export type Testimonial = { quote: string; name: string; role: string; company: string };

// TODO: only publish quotes you have in writing, attributed to a real person
// who has agreed to be named. Unattributed or invented quotes are worthless
// as proof and actively damage trust when spotted.
export const testimonials: Testimonial[] = [
  {
    quote:
      'They took the time to understand how a service centre actually runs before writing a line of code. Job cards, tyre stock and billing now sit in one place instead of three notebooks.',
    name: 'Tharanga Jayalath',
    role: 'Owner',
    company: 'Service Centre & Tyre Replacement Portal',
  },
  {
    quote:
      'What we got back each week was something we could click through, not a status report. When our priorities moved, the build moved with them.',
    name: 'Ulindu Lalanka',
    role: 'Director',
    company: 'Car Doc Service Centre',
  },
  {
    quote:
      'Production tracking that finally matches the factory floor. They kept supporting us well past handover, and still flag things before we notice them.',
    name: 'Kasun',
    role: 'Operations Lead',
    company: 'BK Apparels (Pvt) Ltd — Loomtrack Solutions',
  },
];

// TODO: replace with real client names — only those who have agreed to be
// listed. Shown as wordmarks; swap for SVG logos when you have them.
export const clients = [
  'Client One',
  'Client Two',
  'Client Three',
  'Client Four',
  'Client Five',
  'Client Six',
];

export type FaqItem = { q: string; a: string };

// TODO: check each answer matches how you actually work and quote.
export const faqs: FaqItem[] = [
  {
    q: 'How do projects usually start?',
    a: 'With a short discovery call, free of charge. We talk through your goals, users and constraints, then come back with a written scope, timeline and fixed estimate before any work begins.',
  },
  {
    q: 'What does a project cost?',
    a: 'It depends on scope, but we quote a fixed price per phase rather than open-ended hourly billing, so you know the number before we start. Smaller sites and internal tools typically run in a different bracket to multi-platform products — the discovery call is where we size it honestly.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Most engagements run in two-week sprints with working software to review at the end of each one. A focused web platform is often weeks rather than months; larger systems are scoped in phases so you see value before the whole thing is finished.',
  },
  {
    q: 'Do you work with clients outside Sri Lanka?',
    a: 'Yes. We are based in Kaduwela and work remotely with clients across time zones, with overlap hours agreed up front so reviews and stand-ups land at a reasonable time for you.',
  },
  {
    q: 'Who owns the code?',
    a: 'You do. On final payment you get full ownership, the repository, deployment access and documentation. We do not hold infrastructure or source code hostage.',
  },
  {
    q: 'What happens after launch?',
    a: 'We monitor, patch and keep improving under a support arrangement that suits you, from ad-hoc fixes to an ongoing retainer. You are never forced into one.',
  },
];
