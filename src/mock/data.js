import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Stallings | Software Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is',
  name: 'Myshawne',
  subtitle: "AND I'm a Software Engineer",
  cta: 'Get To Know Me', // Know More
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_pic.jpeg',
  paragraphOne: `Originally from Baltimore, MD I decided to move to California after graduation to start a new life. Working as a help desk technician I was able to gain the skills to be able to troubleshoot a wide variety of issues that came up on a daily basis.`,
  paragraphTwo: `Utilizing those skills as well as the developed soft skills that allow me to connect with people of varying backgrounds, I was able to effectively move into a Software Engineer position where I have to triage varying issues daily, while thinking outside of the box to create effective solutions.`,
  paragraphThree: `When I am not coding, I am enjoying video games, diving into new technologies and reading various items dealing with the topics of Augmented Reality, Cyber Security, & Social Causes. I enjoy working in spaces that encourages growth, honesty, transparency, while supporting a product that aids people in their everyday lives.`,
  resume: `https://docs.google.com/document/d/1iaDPpf7jHaqXutdLBXWM2l0yv8WAULCoUkHfz9_0F1A/edit?usp=sharing`, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gatherup.png',
    title: 'GATHERUP APP',
    info: `Full Stack Application utilizing the MERN stack (MongoDB Express React Nodejs) with full CRUD capabilities. Created with a team of 4 developers utilizing AGILE best practices where I operated as Scrum master/Software Developer as well as using a Github Feature Branch workflow. The idea came from one of my team members as they wanted to bring people together within in a small community using events posted locally. Then as a team we branched it from just being local to all over.`,
    info2: '',
    url: 'https://gatherupapp.herokuapp.com/',
    repo: 'https://github.com/2magpies/ibcc-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'touch-of-fragrance.JPG',
    title: 'Touch Of Fragrance',
    info: `A freelance project created using wix web builder.`,
    info2: '',
    url: `https://www.touchoffragrancebodyoils.com`,
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo-list-Imgur.png',
    title: 'MERN ToDo List App',
    info: `Created using React.js + Hooks, MongoDB, Express.JS, & Node.Js. This app was created with curiosity for using new cloud based technologies. With a combination of MERN + Firebase I was able to create a full stack application with authentication. The frontend is hosted using Firebase while the backend is hosted using Heroku while utilizing firebase auth in order to have users be able to login/sign up. This app is also styled using SCSS.`,
    info2: '',
    url: `https://todo-list-2eb71.web.app/`,
    repo: 'https://github.com/Mysta3/todo-list-web-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bdr_img.jpeg',
    title: 'WELCOME TO MY SPACE',
    info: `Created using AR.js + A-frame. This app was created with a curiosity for building with Augmented Reality technology. Enjoy the simple version of space. This was created as a contribution to Developer DesignIsOrion's original project.
    How To: 1. Scan the image below with your camera phone 2. On a computer search: Kanji AR Marker or copy and paste the link below into your browser.`,
    info2: 'https://commons.wikimedia.org/wiki/File:Kanji_marker_ARjs.png',
    url: 'https://i.imgur.com/IRKvuOq.jpg',
    repo: 'https://github.com/Mysta3/The-Moon-Moves', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'simonsays.jpeg',
    title: 'Simon Says - Poké Style [Desktop Compatible Only]',
    info: `HTML, CSS with NES.css framework, and Vanilla JavaScript with
                HOWLjs. Enjoy the original game of Simon Says with a nostalgic Pokemon
              theme! This was a project that combined my childhood with the
              lessons learned growing up! (quick back story) Whenever I received
              a video game my grandfather made sure he brought me a game dealing
              with puzzles. Ex: I received Spyro and he bought me Tetris -_- !
              But I enjoyed bringing those two aspects together into one
              project! WARNING: SOUND EFFECTS ARE USED!!`,
    info2: '',
    url: 'https://mysta3.github.io/simon_app/',
    repo: 'https://github.com/Mysta3/simon_app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'squadup.png',
    title: 'SquadUp App',
    info: `Full Stack App utilizing a Reactjs frontend and a Python/Django + Django RestFramework + PostgreSQL backend. Space and place for gamers to find a squad that shares the same gaming schedule! I created this because I feel it's a problem in the gaming community that people tend to play with randoms because they cannot squad up with their normal party. So I decided what better time but to create an application that will allow this to happen! This was definitely challenging as I find working with PostgreSQL a bit more challenging than working with a mongoDB. But it was still fun to develop and I must say it looks REALLY GOOD on mobile for being a version 1!`,
    info2: '',
    url: 'https://squadup-app.herokuapp.com/squadup',
    repo: 'https://github.com/Mysta3/squadup-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'advice-app.png',
    title: 'Ad-Vice Assistant App',
    info: `React.js + Hooks, Material-UI and a 3rd party API. Whether you are looking for guidance, a lover of quotes, or
              even just searching for your next Instagram caption. You can rest
              assure you will find one here! Who doesn't like some motivational
              quotes that they can post or discuss with their inner circle....or
              outer... whichever floats your boat!`,
    info2: '',
    url: 'https://advice-assistant-app.herokuapp.com/',
    repo: 'https://github.com/Mysta3/advice_app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's Connect!",
  email: 'mstallings.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/_kingchozen',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/myshawne-stallings/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Mysta3',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
