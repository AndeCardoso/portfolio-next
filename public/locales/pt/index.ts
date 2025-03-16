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
      SHORT_BIO: `Salve! Meu nome é Anderson Cardoso!\n\n Sou um Desenvolvedor Front-End e Mobile, especializado em React Native e React.js.
      Trabalho profissionalmente com React e React Native desde 2021, desenvolvendo soluções e aprimorando o desempenho de aplicações nos setores de saúde, logística e seguros.
      Tenho um forte entendimento dos princípios de UX/UI e sou altamente comprometido com a qualidade e usabilidade das aplicações. Meu foco é identificar as reais necessidades e entregar um valor maior do que apenas um simples produto digital.
      Tenho grande orgulho em escrever código limpo e eficiente, sempre priorizando processos, pois são eles que realmente fazem a diferença no sucesso de um grande projeto.`,
      BUTTON_CONTACT_ME: "Entre em contato",
    },
    ABOUT_ME: {
      TITLE: "Sobre mim",
      DESCRIPTION: "Minha história",
      TEXT: `Estou trabalhando profissionalmente com React e React Native há mais de 3 anos, desenvolvendo soluções e aprimorando o desempenho de aplicações nos setores de saúde, logística e seguros.
      Minhas principais tecnologias incluem React Native, Expo, React, Next, Vite, TypeScript e JavaScript.
      Atualmente, atuo como Software Engineer na WeFit, especializada em aplicativos móveis white-label.
      Em relação às soft skills, sou reconhecido como um profissional prestativo, sempre pronto para colaborar com os colegas. Tenho um olhar atento aos detalhes, excelente capacidade de resolução de problemas, priorizo a qualidade do código, aprendo rápido e sou um pensador criativo.
      Entre minhas conquistas notáveis, destaco o aumento da nota de um aplicativo de saúde na Play Store de 3.4 para 4.6 e na Apple Store de 2.4 para 4.5, com mais de 15 milhões de downloads registrados.`,
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
          INFO: "Osório",
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
          COMPANY: "Freelancer",
          PERIOD: "2021/02",
          DESCRIPTION:
            "Desenvolvimento de sistemas para empresas que buscavam divulgar seus negócios através de sites Landing Page, porém com ferramentas de dashboard, gerir o conteúdo textual, ilustrativo e links redirecionaveis, tornando facíl e rapida a atualização de seus sites.",
        },
      ],
    },
    REVIEWS: {
      TITLE: "Reviews",
      DESCRIPTION: "O que colegas dizem",
      CAROUSEL: [
        {
          AVATAR: "/reviwers/02.jpg",
          NAME: "Everton Xavier",
          ROLE: "Líder técnico / Desenvolvedor Web",
          QUOTE: `Tive o privilégio de trabalhar com Anderson na WeFit em dois projetos distintos, totalizando 15 meses de colaboração. Durante esse período, ele se destacou como um profissional altamente qualificado, demonstrando uma expertise técnica excepcional e uma habilidade única para gerenciar cerimônias e interações com clientes.

No primeiro projeto, que durou 6 meses, Anderson foi essencial para a entrega de soluções inovadoras e de alta qualidade. Sua capacidade de resolver problemas complexos e sua proatividade foram fatores-chave para o sucesso da equipe.

No segundo projeto, no qual trabalhamos juntos por 9 meses, ele continuou a impressionar com sua dedicação, abordagem orientada a resultados e habilidade para mediar requisitos técnicos e expectativas dos clientes.`,
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
