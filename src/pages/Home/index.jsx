import "./styles.css";
import "../../global.css";
import Header from "../../components/Header";
import Looper from "../../assets/looper-bg.png";
import Button from "../../components/Button";
import LinkedIn from "../../assets/linkedin.png";
import WhatsApp from "../../assets/whatsapp.png";
import GitHub from "../../assets/github.png";
import YouTube from "../../assets/youtube.png";
import Profile from "../../assets/profile.png";
import Twitter from "../../assets/twitter.png";
import Kontacts from "../../assets/kontacts.png";
import CompanyButton from "../../components/CompanyButton";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

const Home = () => {
  return (
    <div className='home' id='#home'>
      <Header />
      <section className='welcome container' id='welcome'>
        <div className='welcome__text'>
          <span className='welcome__introduction'>Olá, eu sou</span>
          <span className='welcome__name'>Wesley Eugênio</span>
          <span className='welcome__profession'>Desenvolvedor Full Stack.</span>
        </div>
        <div className='welcome__buttons'>
          <Button text='Entre em Contato' icon={WhatsApp} color='blue' />
        </div>
        <img className='welcome__img' src={Looper} alt='Imagem background' />
      </section>
      <section className='experience container section' id='experience'>
        <h2 className='experience__title'>Experiência</h2>
        <div className='experience__data'>
          <div className='experience__companies'>
            <CompanyButton companyName='Digital Seller' />
          </div>
          <div className='experience__description'>
            <div className='experience__header'>
              <h2 className='experience__office'>Estagiário Front-end</h2>
              <span className='experience__period'>Nov 2021 - Nov 2021</span>
            </div>
            <span className='experience__company-name'>Digital Seller</span>
            <p className='experience__paragraph'>
              Atuava no desenvolvimento e manutenção das páginas da empresa,
              utilizando HTML, CSS, PHP, Git e GitHub. Desenvolvi e aprimorei
              habilidades como trabalho em equipe, gestão das atividades e
              comunicação.
            </p>
          </div>
        </div>
      </section>
      <section className='projects container section' id='projects'>
        <h2 className='projects__title'>Projetos</h2>
        <div className='projects__cards'>
          <Card img={Kontacts} />
          <Card img={Kontacts} />
        </div>
      </section>
      <section className='about-me container section' id='about-me'>
        <img className='about-me__img' src={Profile} alt='Perfil' />
        <div className='about-me__information'>
          <h2 className='about-me__title'>Sobre mim</h2>
          <h3 className='about-me__subtitle'>Bahia, Brasil</h3>
          <p className='about-me__paragraph'>
            Sou Desenvolvedor Full Stack com formação técnica, experiência e
            domino as seguintes tecnologias: HTML, CSS, JavaScript, ReactJS,
            Material UI, NodeJS, Git, GitHub e deploy. Tenho como missão
            resolver problemas reais por meio da tecnologia e por isso me
            desafio constantemente em busca de conhecimento.
          </p>
          <div className='about-me__social-media'>
            <img className='about-me__media' src={YouTube} alt='YouTube' />
            <img className='about-me__media' src={Twitter} alt='Twitter' />
            <img className='about-me__media' src={LinkedIn} alt='LinkedIn' />
            <img className='about-me__media' src={GitHub} alt='GitHub' />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
