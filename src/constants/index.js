import {
  flutter,
  gfx,
  c,
  python,
  video,
  gd,
  javascript,
  html,
  css,
  fluttertech,
  git,
  nepaliguide,
  englishguide,
  school,
  college,
  uni,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Flutter App Development',
    icon: flutter,
  },
  {
    title: 'Game Development',
    icon: gd,
  },
  {
    title: 'Graphics Design',
    icon: gfx,
  },
  {
    title: 'Video Editing',
    icon: video,
  },
];

const technologies = [
  {
    name: 'Flutter',
    icon: fluttertech,
  },
  {
    name: 'C',
    icon: c,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Vidya Bardan English Boarding School',
    company_name: 'Phidim Municipality Panchthar',
    icon: school,
    iconBg: '#333333',
    date: 'Apr 2008 - Mar 2021',
  },
  {
    title: 'Global School of Science',
    company_name: 'Mid Baneshwor Kathmandu',
    icon: college,
    iconBg: '#333333',
    date: 'Aug 2021 - May 2023',
  },
  {
    title: 'Thapar Institute of Engineering and Technology',
    company_name: 'Patiala Pubjab',
    icon: uni,
    iconBg: '#333333',
    date: 'Jan 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Nepali Guide',
    description: 'A guide app for Nepal\'s 10+2 Nepali textbook. Built with Flutter',
    image: nepaliguide,
    demo: 'https://play.google.com/store/apps/details?id=com.futurebits.plus2nepali',
  },
  {
    id: 'project-2',
    name: 'English Guide',
    description:
      'A guide app for Nepal\'s 10+2 English textbook. Built with Flutter',
    image: englishguide,
    demo: 'https://play.google.com/store/apps/details?id=com.futurebits.plus2english',
  },
];

export { services, technologies, experiences, projects };
