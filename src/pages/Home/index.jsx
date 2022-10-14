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
import CompanyButton from "../../components/CompanyButton";

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
          <Button text='GitHub' icon={GitHub} color='purple' />
          <Button text='LinkedIn' icon={LinkedIn} color='blue' />
        </div>
        <img className='welcome__img' src={Looper} alt='Imagem background' />
      </section>
      <section className='about-me container section' id='about-me'>
        <img className='about-me__img' src={Profile} alt='Perfil' />
        <div className='about-me__information'>
          <h2 className='about-me__title'>Sobre mim</h2>
          <h3 className='about-me__subtitle'>Bahia, Brasil</h3>
          <p className='about-me__paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
            egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean ac
            commodo dolor, nec bibendum velit.
          </p>
          <div className='about-me__social-media'>
            <img className='about-me__media' src={YouTube} alt='YouTube' />
            <img className='about-me__media' src={Twitter} alt='Twitter' />
          </div>
          <Button text='Contato' icon={WhatsApp} color='blue' />
        </div>
      </section>
      <section className='experience container section'>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at
              mattis metus. Nullam sit amet mauris condimentum, volutpat augue
              in, mattis urna.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
