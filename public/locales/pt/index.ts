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
        "Salve! Meu nome é Anderson Cardoso!\n\n Eu trabalho como desenvolvedor web e mobile desde 2021, com foco em React, React Native, e Next.js, todos utilizando TypeScript.\nTambém ja trabalhei com Angular 7, e com Node.js quando desenvolvia projetos full-stack como freelancer.",
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
      CAROUSEL: [
        {
          COMPANY: "WeFit",
          PERIOD: "Agora",
          DESCRIPTION:
            "Uma empresa de Design de Serviços com o propósito de transformar estratégias, objetivos e necessidades em experiências através de tecnologia.\n Resumidamente ajudar as empresas conseguirem mais precisão e velocidade nas iniciativas digitais.\nNos posicionamos como parceiros estratégicos, ajudando nossos clientes a construírem idéias, desenvolverem novos conceitos ou resolverem problemas por meio de soluções Web, Mobile, Chatbot e IOT.",
        },
        {
          COMPANY: "Infocap",
          PERIOD: "2022/01",
          DESCRIPTION:
            "Uma empresa expecializada em soluções tecnologicas para o mercado de seguros.\nDesenvolvendo sistemas para tornar mais facil a vida do corretor de seguros.Aplicações de multicalculo para Automoveis, Motocicletas, Caminhões, Casas, Condomínios, Negócios and Vida Individual.\nSistema de gereciamento dinâmico para corretores de seguro.",
        },
        {
          COMPANY: "Self-Employed",
          PERIOD: "2021/02",
          DESCRIPTION:
            "Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.\n Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
        },
      ],
    },
    REVIEWS: {
      TITLE: "Reviews",
      DESCRIPTION: "O que colegas dizem",
      CAROUSEL: [
        {
          AVATAR: "/reviwers/01.jpg",
          NAME: "Eloisa Morais",
          ROLE: "Desenvolvedora Mobile",
          QUOTE:
            "Excellent all around! What stood out most was Jake's excellent service. He made sure our order was placed in time, even though we were ordering on What stood out most was Jake's excellent service.",
        },
        {
          AVATAR: "/reviwers/02.jpg",
          NAME: "Everton Xavier",
          ROLE: "Líder técnico / Desenvolvedor Web",
          QUOTE:
            "Excellent all around! What stood out most was Jake's excellent service. He made sure our order was placed in time, even though we were ordering on What stood out most was Jake's excellent service.",
        },
      ],
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
