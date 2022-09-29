import "./styles.css";
import "../../global.css";
import Header from "../../components/Header";
import Looper from "../../assets/looper-bg.png";
import Button from "../../components/Button";
import LinkedIn from "../../assets/linkedin.png";
import GitHub from "../../assets/github.png";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="welcome">
        <div className="welcome__text">
          <span className="welcome__introduction">Olá, eu sou</span>
          <span className="welcome__name">Wesley Eugênio</span>
          <span className="welcome__profession">Desenvolvedor Full Stack.</span>
        </div>
        <div className="welcome__buttons">
          <Button text="LinkedIn" icon={LinkedIn} color="#00d2df" />
          <Button text="GitHub" icon={GitHub} color="#FF1CF7" />
        </div>
        <img className="welcome__img" src={Looper} alt="Imagem background" />
      </section>
    </div>
  );
};

export default Home;
