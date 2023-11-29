import {
  web2,
  skill1,
  skill2,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  bootstrap,
  simon,
  tagit,
  threejs,
  raisewise,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developement",
    icon: web,
  },
  {
    title: "Responsive Web Designs",
    icon: web2,
  },
  {
    title: "HTML, CSS, JS, React JS",
    icon: skill1,
  },
  {
    title: "DSA, C++, SQL, OS, Cloud",
    icon: skill2,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
      name: "Bootstrap",
      icon: bootstrap,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const projects = [
  {
    name: "TagIT",
    description:
      "TagIT is a user-friendly and innovative online platform designed which offers a unique QR code generator that enables travelers to create personalized QR codes and attach them to their bags, with a Live Chat feature.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
    ],
    image: tagit,
    source_code_link: "https://github.com/Y-ashRathore/TagIt",
  },
  {
    name: "Simon Game",
    description:
      "The 'Simon Memory Game' is a web-based implementation of the classic electronic game 'Simon,' designed to challenge and improve a player's memory and pattern recognition skills.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: simon,
    source_code_link: "https://y-ashrathore.github.io/SimonGame/",
  },
  {
    name: "RaiseWise",
    description:
      "A decentralized blockchain-implemented crowdfunding website that offers a secure and transparent solution for individuals and organizations to raise funds for various personal/social causes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
    ],
    image: raisewise,
    source_code_link: "https://github.com/Y-ashRathore/RaiseWise",
  },
];

export { services, technologies, projects };
