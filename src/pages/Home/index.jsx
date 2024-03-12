import "./styles.css";
import "../../global.css";
import Header from "../../components/Header";
import Avatar from "../../assets/avatar.png";
import Button from "../../components/Button";
import LinkedIn from "../../assets/linkedin.png";
import WhatsApp from "../../assets/whatsapp.png";
import GitHub from "../../assets/github.png";
import YouTube from "../../assets/youtube.png";
import Profile from "../../assets/profile.png";
import Footer from "../../components/Footer";
import Experience from "../../components/Experience";
import Card from "../../components/Card";

import { projects } from "../../projects";
import { frontend, backend, others } from "../../technologies";

import { useState } from "react";

const Home = () => {
  const [stack, setStack] = useState("front-end");

  return (
    <div className='home' id='#home'>
      <Header />

      <section className='welcome container' id='welcome'>
        <div className='welcome__text'>
          <span className='welcome__introduction'>Olá, eu sou</span>
          <span className='welcome__name'>Wesley Costa</span>
          <span className='welcome__profession'>
            Desenvolvedor Web Full Stack.
          </span>
          <Button
            text='Converse Comigo'
            icon={WhatsApp}
            link='https://bit.ly/3sJeyId'
          />
        </div>
        <img className='welcome__img' src={Avatar} alt='Imagem background' />
      </section>

      <section className='about-me container section' id='about-me'>
        <img className='about-me__img' src={Profile} alt='Perfil' />
        <div className='about-me__information'>
          <h2 className='about-me__title'>Sobre mim</h2>
          <h3 className='about-me__subtitle'>Bahia, Brasil</h3>
          <p className='about-me__paragraph'>
            Sou Desenvolvedor Full Stack com formação técnica, experiência e
            domino as seguintes tecnologias: JavaScript, React, Vue, Node, Ruby,
            Ruby on Rails, Git e GitHub. Tenho como missão resolver problemas
            reais por meio da tecnologia e por isso me desafio constantemente em
            busca de conhecimento.
          </p>
          <div className='about-me__social-media'>
            <a
              href='https://www.youtube.com/@wesleyeugenio9806/videos'
              target='blank'
            >
              <img className='about-me__media' src={YouTube} alt='YouTube' />
            </a>
            <a href='https://www.linkedin.com/in/wesley-dev/' target='blank'>
              <img className='about-me__media' src={LinkedIn} alt='LinkedIn' />
            </a>
            <a href='https://github.com/eugenio-cyber' target='blank'>
              <img className='about-me__media' src={GitHub} alt='GitHub' />
            </a>
          </div>
        </div>
      </section>

      <Experience />

      <section className='skills container section' id='skills'>
        <h2 className='skills__title'>Habilidades</h2>
        <div className='skills__top'>
          <h3
            className={`skills__stack ${stack === "front-end" && "active"}`}
            onClick={() => setStack("front-end")}
          >
            Front-end
          </h3>
          <h3
            className={`skills__stack ${stack === "back-end" && "active"}`}
            onClick={() => setStack("back-end")}
          >
            Back-end
          </h3>
          <h3
            className={`skills__stack ${stack === "others" && "active"}`}
            onClick={() => setStack("others")}
          >
            Outros
          </h3>
        </div>
        <div className='skills__content'>
          {stack === "front-end" &&
            frontend.map((img) => {
              return <img className='skills__img' src={img} alt='Technology' />;
            })}
          {stack === "back-end" &&
            backend.map((img) => {
              return <img className='skills__img' src={img} alt='Technology' />;
            })}
          {stack === "others" &&
            others.map((img) => {
              return <img className='skills__img' src={img} alt='Technology' />;
            })}
        </div>
      </section>

      <section className='projects container section' id='projects'>
        <h2 className='projects__title'>Projetos</h2>
        <div className='projects__cards'>
          {projects.map((project) => {
            return <Card project={project} />;
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
