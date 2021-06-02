import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rushikesh Jadhav', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: 'I am an IT Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile (2).jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1q9Wn28VV-xrYpHfCu7XYVyOqsLtUO1w8/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'folioproject.JPG',
    title: 'My portfolio',
    info: 'This is my portfolio website which show information about myself ',
    info2: '',
    url: '',
    repo: 'https://github.com/rishijadhav211', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/rishijadhav211', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rishijadhav211@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/rushikesh-jadhav211',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rishijadhav211',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
