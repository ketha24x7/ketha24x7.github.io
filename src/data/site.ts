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
