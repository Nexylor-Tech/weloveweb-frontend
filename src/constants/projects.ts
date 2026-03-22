import confectionaryImg from '../assets/confectionary.png';
import eventmanagementImg from '../assets/eventmanagement.png';
import restaurantImg from '../assets/restaurant.png';
import tuitiondemoImg from '../assets/tuitiondemo.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  client: string;
  image: string;
  color: string;
  textColor?: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Bakery',
    description: 'We listen to, process and analyse social conversations.',
    client: "Rita's Oven",
    image: confectionaryImg,
    color: 'bg-brand-purple',
    textColor: 'text-[#B2A4FF]',
    link: 'https://ritasovendemopage.pages.dev/'
  },
  {
    id: '02',
    title: 'Event Management',
    description: 'We develop strategies inspired by actual facts.',
    client: 'Bash and Bloom',
    image: eventmanagementImg,
    color: 'bg-brand-green',
    textColor: 'text-[#F9F871]',
    link: 'https://bashandbloomeventorganisers.pages.dev/'
  },
  {
    id: '03',
    title: 'Restaurant',
    description: 'We create content, activations and drive engaging conversations.',
    client: "Roy's Fine Dining",
    image: restaurantImg,
    color: 'bg-brand-pink',
    textColor: 'text-[#FFB6B9]',
    link: 'https://roysfinedining.pages.dev/'
  },
  {
    id: '04',
    title: "Tuition",
    description: 'We think about amplifying and building media coverage for our strategies via influence marketing and paid content.',
    client: "Arjun Sir's Classes",
    image: tuitiondemoImg,
    color: 'bg-brand-yellow',
    textColor: 'text-[#B2A4FF]',
    link: 'https://tuitiondemopage.pages.dev/'
  }
];
