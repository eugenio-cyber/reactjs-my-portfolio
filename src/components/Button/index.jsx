import "./styles.css";

const Button = ({ text, icon, color, link }) => {
  return (
    <a className='link' href={link} target='__blank'>
      <button
        className={`${color === "purple" ? "button--purple" : "button--blue"} `}
      >
        <img className='button__icon' src={icon} alt='Ícone do botão' />
        {text}
      </button>
    </a>
  );
};

export default Button;
