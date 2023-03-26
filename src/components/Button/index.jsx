import "./styles.css";

const Button = ({ text, icon, link }) => {
  return (
    <a className='link' href={link} target='__blank'>
      <button className="button">
        <img className='button__icon' src={icon} alt='Ícone do botão' />
        {text}
      </button>
    </a>
  );
};

export default Button;
