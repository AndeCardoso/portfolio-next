import { Instagram, Linkedin, Github } from "styled-icons/boxicons-logos";

export const name = "Anderson Cardoso";

export const position = "Software engenner";

export const bio = `Hello there, my name is Anderson Cardoso!\n\n I have been working as a web and mobile front-end developer since 2021, specializing in React, React Native, and Next.js, all implemented with TypeScript.\nI also have prior experience with Angular 7, and Node.js where I worked on full-stack projects as a self-employed freelancer.`;

export const roles = [
  "Front-End Developer",
  "Web Developer",
  "Mobile Developer",
  "A Few Back-Ender too...",
];

export const contactInfo = {
  age: new Date().getFullYear() - 1994,
  residence: "Brazil",
  "main role": "Front-End",
  address: "Florianópolis",
  phone: "+55 51 99724-5468",
  "e-mail": "andersoncardoso.dev@gmail.com",
};

export const aboutText = `I consider myself an easy-going person with the ability to interact effectively with various types of people. I enjoy learning from others and exploring different approaches to problem-solving. I am always eager to assist and support others with their tasks and challenges.\n
In 2012, I attended the Lutheran University of Brazil, also known as ULBRA, focusing on C# with ASP.NET MVC and Windows Phone development. Although I didn't complete the program at that time, I am currently returning to finish my degree.\n
My priorities include maintaining code quality and ensuring a positive user experience. I take pride in my proficiency in identifying and resolving bugs.`;

export const techIconList = [
  {
    name: "React",
    icon: "react",
  },
  {
    name: "TypeScript",
    icon: "typescript",
  },
  {
    name: "Next Js",
    icon: "next",
  },
  {
    name: "React Native",
    icon: "react",
  },
  {
    name: "SASS",
    icon: "sass",
  },
  {
    name: "Styled Component",
    icon: "styled-component",
  },
];

export const headerSectionsButtons = [
  {
    text: "Home",
    link: "#home",
  },
  {
    text: "About",
    link: "#about",
  },
  {
    text: "Technologies",
    link: "#technologies",
  },
  {
    text: "Experiences",
    link: "#experiences",
  },
  {
    text: "Reviews",
    link: "#reviews",
  },
  // {
  //   text: "Projects",
  //   link: "#projects",
  // },
  {
    text: "Contact",
    link: "#contact",
  },
];

export const socialButtons = [
  {
    icon: <Github size={24} />,
    link: "https://github.com/AndeCardoso",
  },
  {
    icon: <Linkedin size={24} />,
    link: "https://www.linkedin.com/in/andersoncardoso-dev/?locale=en_US",
  },
  {
    icon: <Instagram size={24} />,
    link: "https://instagram.com/andecardoso.dev",
  },
];

export const experiencesData = [
  {
    company: "WeFit",
    period: "Current",
    description:
      "A Service Design company with the aim of transforming strategies, objectives and needs into experiences through technology.\nIn short, to help companies achieve greater precision and speed in their digital initiatives.\nWe position ourselves as strategic partners, helping our clients to build ideas, develop new concepts or solve problems through Web, Mobile, Chatbot and IOT solutions.",
  },
  {
    company: "Infocap",
    period: "2022/01",
    description:
      "A company specializing in technological solutions for the insurance market.\nDeveloping systems to make life easier for insurance brokers.\nMulticalculation for Auto, Motorcycle, Truck, Home, Condominium, Business and Individual Life.\nManagement system for dynamic insurance brokers.",
  },
  {
    company: "Self Employed",
    period: "2021/02",
    description:
      "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
  },
];

export const reviewsData = [
  {
    avatar: "/reviwers/01.jpg",
    name: "Eloisa Morais",
    role: "Mobile developer",
    quote:
      "Excellent all around! What stood out most was Jake's excellent service. He made sure our order was placed in time, even though we were ordering on What stood out most was Jake's excellent service.",
  },
  {
    avatar: "/reviwers/02.jpg",
    name: "Everton Xavier",
    role: "Web developer",
    quote:
      "Excellent all around! What stood out most was Jake's excellent service. He made sure our order was placed in time, even though we were ordering on a holiday.",
  },
];
