import "./styles.css";
import "../../global.css";
import Header from "../../components/Header";
import Looper from "../../assets/looper-bg.png";

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
          <button className="btn--linkedin"></button>
          <button className="btn--gitHub"></button>
        </div>
        <img className="welcome__img" src={Looper} alt="Imagem background" />
      </section>
    </div>
  );
};

export default Home;
