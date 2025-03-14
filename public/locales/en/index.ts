import { getAge } from "@src/utils/getAge";

export const en = {
  MAIN: {
    NAVBAR: {
      SECTION_BUTTONS: {
        HOME: "Home",
        ABOUT: "About",
        TECHNOLOGIES: "Technologies",
        EXPERIENCES: "Experiences",
        CONTACT: "Contact",
      },
      RESUME: "Resume",
    },
    HEADER: {
      NAME: "Anderson\nCardoso",
      ROLES: [
        "Front-End Developer",
        "Web Developer",
        "Mobile Developer",
        "A Few Back-Ender too...",
      ],
      SHORT_BIO: `Hello there, my name is Anderson Cardoso!

      A Front End and Mobile Developer, specialized in React Native and React Js.
      I have been working professionally with React and React Native since 2021, developing solutions and enhancing application performance in the health, logistic and insurance sectors.
      I have a strong understanding of UX/UI principles and am deeply committed to app quality and usability. I focus on identifying true needs and delivering greater value than just a simple digital product.
      I take great pride in crafting clean and efficient code, always focused on processes, as they are what truly make a difference in the success of a great project.`,
      BUTTON_CONTACT_ME: "Contact me",
    },
    ABOUT_ME: {
      TITLE: "About me",
      DESCRIPTION: "My history",
      TEXT: `I've been working professionally with React and React Native for over than 3 years, developing solutions and improving application performance in the health, logistics, and insurance sectors.
      My main technologies include React Native, Expo, React, Next, Vite, TypeScript and JavaScript.
      Currently working as a Software Engineer at WeFit, specialized in white-label mobile applications.
      Regarding soft skills, mentioned as a helpful professional always ready to collaborate with colleagues. Keen eye for detail, excels at problem-solving, prioritizes code quality, fast learner, and creative thinker.
      Notable achievements include increasing 3.4 score in a health application at Play Store and 2.4 at Apple Store, with more than 15 millions downloads registered.`,
      BUTTON: "Contact me",
      INFOS: {
        AGE: {
          LABEL: "Age",
          INFO: getAge("02/12/1994"),
        },
        RESIDENCE: {
          LABEL: "Residence",
          INFO: "Brazil",
        },
        "MAIN ROLE": {
          LABEL: "Role",
          INFO: "Front-End Developer",
        },
        ADDRESS: {
          LABEL: "City",
          INFO: "Osório",
        },
        PHONE: {
          LABEL: "Phone",
          INFO: "+55 51 99724-5468",
        },
        "E-MAIL": {
          LABEL: "E-mail",
          INFO: "andersoncardoso.dev@gmail.com",
        },
      },
    },
    TECHNOLOGIES: {
      TITLE: "Technologies",
      DESCRIPTION: "Developing on",
    },
    EXPERIENCES: {
      TITLE: "Experiences",
      DESCRIPTION: "Working with",
      CAROUSEL: [
        {
          COMPANY: "WeFit",
          PERIOD: "Current",
          DESCRIPTION:
            "A Service Design company with the aim of transforming strategies, objectives and needs into experiences through technology.\nIn short, to help companies achieve greater precision and speed in their digital initiatives.\nWe position ourselves as strategic partners, helping our clients to build ideas, develop new concepts or solve problems through Web, Mobile, Chatbot and IOT solutions.",
        },
        {
          COMPANY: "Infocap",
          PERIOD: "2022/01",
          DESCRIPTION:
            "A company specializing in technological solutions for the insurance market.\nDeveloping systems to make life easier for insurance brokers.\nMulticalculation for Auto, Motorcycle, Truck, Home, Condominium, Business and Individual Life.\nManagement system for dynamic insurance brokers.",
        },
        {
          COMPANY: "Freelancer",
          PERIOD: "2021/02",
          DESCRIPTION:
            "Development of systems for companies that aimed to promote their businesses through Landing Page websites, but with dashboard tools to manage textual, illustrative content, and redirectable links, making it easy and quick to update their websites.",
        },
      ],
    },
    REVIEWS: {
      TITLE: "Reviews",
      DESCRIPTION: "What co-workers say",
      CAROUSEL: [
        {
          AVATAR: "/reviwers/01.jpg",
          NAME: "Eloisa Morais",
          ROLE: "Mobile developer",
          QUOTE:
            "Excellent all around! What stood out most was Jake's excellent service. He made sure our order was placed in time, even though we were ordering on What stood out most was Jake's excellent service.",
        },
        {
          AVATAR: "/reviwers/02.jpg",
          NAME: "Everton Xavier",
          ROLE: "Tech leader / Web developer",
          QUOTE:
            "Excellent all around! What stood out most was Jake's excellent service. He made sure our order was placed in time, even though we were ordering on What stood out most was Jake's excellent service.",
        },
      ],
    },
    CONTACT_ME: {
      TITLE: "Contact me",
      DESCRIPTION: "Call me",
      BUTTON: "Send",
      INFOS: {
        NAME: "Anderson Cardoso",
        POSITION: "Software Engeneer",
      },
      FORM: {
        NAME: {
          LABEL: "Name",
          PLACEHOLDER: "Write your full name",
          REQUIRED: "Who's knocking?",
          MIN: "Why so short? Don't be shy...",
          MAX: "Well this's a little so much longer, take it easy...",
        },
        EMAIL: {
          LABEL: "E-mail",
          PLACEHOLDER: "Write your best e-mail",
          REQUIRED: "C'mon! How could I answer you??",
          TYPE: "Are you sure about this address?",
          MAX: "Well this's a little so much longer, take it easy...",
        },
        MESSAGE: {
          LABEL: "Message",
          PLACEHOLDER: "To write",
          REQUIRED: "Let's talk! Tell me something about you want...",
          MIN: "C'mon! Speak more, I'd love hear more about it!!",
          MAX: "Well this's a little so much longer, take it easy...",
        },
      },
      ALERTS: {
        SUCCESS: "Message sent",
        WARNING: "Something has gone wrong, try again!",
        ERROR: "Something has gone wrong, try again later!",
      },
    },
  },
};
