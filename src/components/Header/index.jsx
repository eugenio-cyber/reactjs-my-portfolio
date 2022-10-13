import "./styles.css";
import MenuHamburger from "../../assets/menu-hamburger.png";
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
        <a className='header__logo' href='#home'>
          Portfólio
        </a>
        <ul className={`header__links ${showMenu && "open"}`}>
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
            href='/'
            onClick={() => handleClickLink()}
          >
            Experiência
          </a>
          <a
            className='header__text'
            href='/'
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
