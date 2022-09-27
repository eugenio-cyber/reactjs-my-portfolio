import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <a className="header__logo" href="/">
          Portfólio
        </a>
        <ul className="header__links">
          <a className="header__text" href="/">
            Home
          </a>
          <a className="header__text" href="/">
            Sobre mim
          </a>
          <a className="header__text" href="/">
            Experiência
          </a>
          <a className="header__text" href="/">
            Projetos
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
