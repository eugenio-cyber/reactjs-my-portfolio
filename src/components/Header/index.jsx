import "./styles.css";
import MenuHamburger from "../../assets/menu-hamburger.png";
import Logo from "../../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickLink = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  return (
    <header className={`${showMenu ? "header--mobile" : "header"} container`}>
      <nav className='header__nav'>
        <div className='logo'>
          <img className='logo__img' src={Logo} alt='logo' />
          <span className='logo__text'>Meu Portfólio</span>
        </div>
        <ul className={`header__links ${showMenu ? "open" : ""}`}>
          <a
            className='header__text'
            href='#welcome'
            onClick={() => handleClickLink()}
          >
            Home
          </a>
          <a
            className='header__text'
            href='#about-me'
            onClick={() => handleClickLink()}
          >
            Sobre mim
          </a>
          <a
            className='header__text'
            href='#experience'
            onClick={() => handleClickLink()}
          >
            Experiência
          </a>
          <a
            className='header__text'
            href='#skills'
            onClick={() => handleClickLink()}
          >
            Habilidades
          </a>
          <a
            className='header__text'
            href='#projects'
            onClick={() => handleClickLink()}
          >
            Projetos
          </a>
        </ul>
        <img
          className='header__img'
          src={MenuHamburger}
          alt='Menu hamburger'
          onClick={() => setShowMenu(!showMenu)}
        />
      </nav>
    </header>
  );
};

export default Header;
