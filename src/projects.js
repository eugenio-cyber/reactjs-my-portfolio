import Kontacts from "./assets/kontacts.png";
import EncurtadorLinks from "./assets/encurtador-links.png";
import DinDin from "./assets/din-din.png";
import Pagamentos from "./assets/pagamentos.png";

export const projects = [
  {
    title: "Kontacts",
    text: "Se trata de uma agenda pessoal de contatos construída para facilitar a organização do usuário com relação aos seus contatos.",
    link: "http://reactjs-mui-kontacts.vercel.app/",
    img: Kontacts,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Material UI"],
  },
  {
    title: "Meu Link",
    text: "Se trata de uma aplicação que faz o encurtamento dos seus links e com o auxílio da API do bit.ly.",
    link: "https://eugenio-cyber.github.io/reactjs-api-encurtador-links/",
    img: EncurtadorLinks,
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "DinDin",
    text: "O objetivo desse projeto foi o desenvolvimento duma aplicação para controles de finanças pessoais.",
    link: "https://react-api-dindin.vercel.app/",
    img: DinDin,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
      "Heroku",
      "PostgreSQL",
    ],
  },
  {
    title: "PayPay",
    text: "Esse projeto se trata de uma aplicação capaz de gerenciar devedores, com várias funcionalidade implementadas.",
    link: "https://pacode-team.netlify.app/",
    img: Pagamentos,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Material UI",
      "NodeJS",
      "Heroku",
      "PostgreSQL",
    ],
  },
];
