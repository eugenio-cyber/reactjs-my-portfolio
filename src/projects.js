import EncurtadorLinks from "./assets/encurtador-links.png";
import DinDin from "./assets/din-din.png";
import Pagamentos from "./assets/pagamentos.png";

export const projects = [
  {
    title: "Meu Link",
    text: "Se trata de uma aplicação que faz o encurtamento dos seus links e com o auxílio da API do bit.ly.",
    link: "https://eugenio-cyber.github.io/reactjs-encurtador-links/",
    img: EncurtadorLinks,
    technologies: ["ReactJS", "React Router", "React Icons"],
  },
  {
    title: "DinDin",
    text: "O objetivo desse projeto foi o desenvolvimento duma aplicação para controles de finanças pessoais.",
    link: "https://dindin-app-three.vercel.app/",
    img: DinDin,
    technologies: ["ReactJS", "NodeJS", "PostgreSQL"],
  },
  {
    title: "PayPay",
    text: "Esse projeto se trata de uma aplicação capaz de gerenciar devedores, com várias funcionalidade implementadas.",
    link: "https://paypay-app.vercel.app/",
    img: Pagamentos,
    technologies: ["ReactJS", "Material UI", "NodeJS", "Vercel", "PostgreSQL"],
  },
];
