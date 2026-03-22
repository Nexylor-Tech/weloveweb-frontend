export interface HorizontalScrollProject {
  id: string;
  title: string;
  description: string;
  client: string;
  image: string;
  color: string;
  link: string;
}

export const horizontalScrollProjects: HorizontalScrollProject[] = [
  {
    id: '01',
    title: 'Brand Identity',
    description: 'We listen to, process and analyse social conversations.',
    client: 'TechNova',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    color: 'bg-brand-purple',
    link: 'https://technova.example.com'
  },
  {
    id: '02',
    title: 'E-commerce Redesign',
    description: 'We develop strategies inspired by actual facts.',
    client: 'StyleHub',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    color: 'bg-brand-green',
    link: 'https://stylehub.example.com'
  },
  {
    id: '03',
    title: 'Social Media Campaign',
    description: 'We create content, activations and drive engaging conversations.',
    client: 'FreshBites',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800',
    color: 'bg-brand-pink',
    link: 'https://freshbites.example.com'
  },
  {
    id: '04',
    title: 'SEO Optimization',
    description: 'We think about amplifying and building media coverage for our strategies via influence marketing and paid content.',
    client: 'GlobalReach',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    color: 'bg-brand-yellow',
    link: 'https://globalreach.example.com'
  }
];
