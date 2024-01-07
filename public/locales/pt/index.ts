import { getAge } from "@src/utils/getAge";

export const pt = {
  MAIN: {
    NAVBAR: {
      SECTION_BUTTONS: {
        HOME: "Início",
        ABOUT: "Sobre",
        TECHNOLOGIES: "Tecnologias",
        EXPERIENCES: "Experiências",
        REVIEWS: "Reviews",
        CONTACT: "Contato",
      },
      RESUME: "Currículo",
    },
    HEADER: {
      NAME: "Anderson\nCardoso",
      ROLES: [
        "Desenvolvedor Front-End",
        "Desenvolvedor Web",
        "Desenvolvedor Mobile",
        "As vezes Back-End também...",
      ],
      SHORT_BIO:
        "Salve! Meu nome é Anderson Cardoso!\n\n Eu trabalho como desenvolvedor web e mobile desde 2021, com foco em React, React Native, e Next.js, todos utilizando TypeScript.\nEu também ja trabalhei com Angular 7, e com Node.js quando desenvolvia projetos full-stack como freelancer.",
      BUTTON_CONTACT_ME: "Entre em contato",
    },
    ABOUT_ME: {
      TITLE: "Sobre mim",
      DESCRIPTION: "Minha história",
      TEXT: "Me considero uma pessoa de fácil convivência, com habilidade para interagir efetivamente com diversos tipos de pessoas. Gosto de aprender com os outros e explorar abordagens diferentes para resolver problemas. Estou sempre ansioso para ajudar e apoiar os outros em suas tarefas e desafios.\nEm 2012, frequentei a Universidade Luterana do Brasil, também conhecida como ULBRA, focando em C# com ASP.NET MVC e desenvolvimento para Windows Phone. Embora não tenha concluído o curso naquela época, atualmente estou retornando para concluí-lo.\nMinhas prioridades incluem manter a qualidade do código e garantir uma experiência de usuário positiva.\nTenho orgulho da minha proficiência em identificar e resolver bugs.",
      BUTTON: "Entre em contato",
      INFOS: {
        AGE: {
          LABEL: "Idade",
          INFO: getAge("02/12/1994"),
        },
        RESIDENCE: {
          LABEL: "RESIDENTE",
          INFO: "Brasil",
        },
        "MAIN ROLE": {
          LABEL: "Cargo",
          INFO: "Desenvolvedor Front-End",
        },
        ADDRESS: {
          LABEL: "Cidade",
          INFO: "Florianópolis",
        },
        PHONE: {
          LABEL: "Telefone",
          INFO: "(51) 9 9724-5468",
        },
        "E-MAIL": {
          LABEL: "E-mail",
          INFO: "andersoncardoso.dev@gmail.com",
        },
      },
    },
    TECHNOLOGIES: {
      TITLE: "Tecnologias",
      DESCRIPTION: "Desenvolvo em",
    },
    EXPERIENCES: {
      TITLE: "Experiências",
      DESCRIPTION: "Trabalhando com",
    },
    REVIEWS: {
      TITLE: "Reviews",
      DESCRIPTION: "O que colegas dizem",
    },
    CONTACT_ME: {
      TITLE: "Entre em contato",
      DESCRIPTION: "Me chama ai!",
      BUTTON: "Enviar",
      INFOS: {
        NAME: "Anderson Cardoso",
        POSITION: "Engenheiro de Software",
      },
      FORM: {
        NAME: {
          LABEL: "Nome",
          PLACEHOLDER: "Informe seu nome completo",
          REQUIRED: "Da parte de quem?",
          MIN: "Apelido isso? Me fala o nome completo aí...",
          MAX: "Eita, meio grandinho né? Vai com calma aí...",
        },
        EMAIL: {
          LABEL: "E-mail",
          PLACEHOLDER: "Informe seu melhor e-mail",
          REQUIRED: "Pô! Como que eu vou te responder dai??",
          TYPE: "Tem certeza que isso é um e-mail?",
          MAX: "Eita, meio grandinho né? Vai com calma aí...",
        },
        MESSAGE: {
          LABEL: "Mensagem",
          PLACEHOLDER: "Informe sua mensagem",
          REQUIRED: "Fala comigo! Me conta ai o que te aflinge...",
          MIN: "Pô! Fala mais aí, to afinzão de saber o que tu tem pra dizer!!",
          MAX: "Eita, meio grandinho né? Vai com calma aí...",
        },
      },
      ALERTS: {
        SUCCESS: "Mensagem enviada",
        WARNING: "Algo deu errado, tente novamente!",
        ERROR: "Algo deu errado, tente novamente mais tarde!",
      },
    },
  },
};
