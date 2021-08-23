import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Stallings | Software Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome! My name is',
  name: 'Myshawne',
  subtitle: "I'm a Software Engineer",
  cta: '', // Know More
};

// ABOUT DATA
export const aboutData = {
  img: 'temp_portfolio.jpg',
  paragraphOne: `Originally from Baltimore, MD I decided to move to California after graduation to start a new life. Working as a help desk technician I was able to gain the skills to be able to troubleshoot a wide variety of issues that came up on a daily basis.`,
  paragraphTwo: `Utilizing those skills as well as the developed soft skills that allow me to connect with people of varying backgrounds, I was able to effectively move into a Software Engineer position where I have to triage varying issues daily, while thinking outside of the box to create effective solutions.`,
  paragraphThree: `When I am not coding, I am enjoying video games, diving into new technologies and reading various items dealing with the topics of Augmented Reality, Cyber Security, & Social Causes. I enjoy working in spaces that encourages growth, honesty, transparency, while supporting a product that aids people in their everyday lives.`,
  resume: 'shorturl.at/r1689', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
