import { Globe, Smartphone, Cloud, Cpu, Database, ShieldCheck, type LucideIcon } from 'lucide-react';

/*
  Company details used across the site. Edit these in one place.
  Links left as an empty string are hidden on the site until you fill them in.
*/
export const company = {
  name: 'Ketha24',
  email: 'ketha24x7@gmail.com',
  // TODO: replace with the real phone number (this one came from the old site and looks like a placeholder)
  phone: '+94 77 109 1391',
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
  { value: '2+', label: 'Years of experience' },
];

export type Service = {
  id: string;
  icon: LucideIcon;
  chip: string;
  title: string;
  description: string;
  features: string[];
  stack: string[];
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
  },
  {
    id: 'mobile',
    icon: Smartphone,
    chip: 'A mobile app',
    title: 'Mobile Apps',
    description: 'Native and cross-platform apps for iOS and Android with polished, intuitive UI/UX.',
    features: ['iOS development', 'Android apps', 'Cross-platform'],
    stack: ['React Native', 'TypeScript', 'Supabase'],
  },
  {
    id: 'cloud',
    icon: Cloud,
    chip: 'Cloud & infrastructure',
    title: 'Cloud & IT Strategy',
    description: 'Cloud infrastructure setup, migration and strategic IT consulting for your business.',
    features: ['AWS / Azure / GCP', 'DevOps', 'Consulting'],
    stack: ['AWS', 'Azure', 'Docker'],
  },
  {
    id: 'ai',
    icon: Cpu,
    chip: 'AI & automation',
    title: 'AI Driven Solutions',
    description: 'Generative AI that automate workflows, sharpen decisions and give you an edge.',
    features: ['AI integration', 'Generative AI', 'Automation'],
    stack: ['Node.js','Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    id: 'data',
    icon: Database,
    chip: 'Data & dashboards',
    title: 'Data Solutions',
    description: 'Data architecture, analytics pipelines and business intelligence dashboards.',
    features: ['Analytics', 'BI dashboards', 'Data engineering'],
    stack: ['PostgreSQL', 'MySQL', 'DynamoDB', 'MongoDB', 'GraphQL'],
  },
  {
    id: 'security',
    icon: ShieldCheck,
    chip: 'Security & compliance',
    title: 'Cybersecurity',
    description: 'Security audits, penetration testing and compliance solutions that keep your systems safe.',
    features: ['Security audits', 'Compliance', 'Monitoring'],
    stack: ['Security audits', 'Pen testing', 'Monitoring', 'Go', 'Rust'],
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

export type CaseStudy = {
  slug: string;
  sector: string;
  title: string;
  summary: string;
  /** 2-3 outcomes. Use real, measured numbers or drop the metric entirely. */
  metrics: { value: string; label: string }[];
  stack: string[];
  /** 16:9 image in /public/images/work/. Placeholder SVG ships by default. */
  image: string;
  href?: string; // link to a full write-up, when one exists
};

// TODO: replace all three with real engagements (with client permission).
export const caseStudies: CaseStudy[] = [
  {
    slug: 'logistics-portal',
    sector: 'Logistics',
    title: 'Dispatch portal replacing manual spreadsheets',
    summary:
      'A regional freight operator tracked every consignment by hand. We built a role-based web portal with live status, driver assignment and automated customer notifications.',
    metrics: [
      { value: '—', label: 'Dispatch time saved' },
      { value: '—', label: 'Manual entries removed' },
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    image: '/images/work/logistics-portal.svg',
  },
  {
    slug: 'retail-commerce',
    sector: 'Retail',
    title: 'Headless storefront with same-day stock sync',
    summary:
      'An apparel retailer needed online and in-store inventory to agree. We delivered a headless commerce front end wired to their POS through a sync service.',
    metrics: [
      { value: '—', label: 'Checkout conversion' },
      { value: '—', label: 'Stock accuracy' },
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Docker'],
    image: '/images/work/retail-commerce.svg',
  },
  {
    slug: 'clinic-scheduling',
    sector: 'Healthcare',
    title: 'Appointment system for a multi-site clinic',
    summary:
      'Phone-only booking capped daily appointments. We shipped patient self-booking with reminders, clinician calendars and an audit trail for compliance.',
    metrics: [
      { value: '—', label: 'No-show reduction' },
      { value: '—', label: 'Bookings self-served' },
    ],
    stack: ['React Native', 'FastAPI', 'PostgreSQL'],
    image: '/images/work/clinic-scheduling.svg',
  },
];

export type Testimonial = { quote: string; name: string; role: string; company: string };

// TODO: only publish quotes you have in writing, attributed to a real person
// who has agreed to be named. Unattributed or invented quotes are worthless
// as proof and actively damage trust when spotted.
export const testimonials: Testimonial[] = [
  {
    quote:
      'They asked harder questions about our process than our own team did. The system we ended up with was not the one we originally briefed — it was the one we actually needed.',
    name: 'Placeholder Name',
    role: 'Operations Director',
    company: 'Client Company',
  },
  {
    quote:
      'Weekly builds we could click through meant no surprises at the end. When priorities shifted mid-project, the plan shifted with them.',
    name: 'Placeholder Name',
    role: 'Founder',
    company: 'Client Company',
  },
  {
    quote:
      'Support did not stop at handover. Six months on they still flag things we had not noticed yet.',
    name: 'Placeholder Name',
    role: 'Head of Technology',
    company: 'Client Company',
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
