import "./styles.css";

const Button = ({ text, icon }) => {
  return (
    <button className='button'>
      <img className='button__icon' src={icon} alt='Ícone do botão' />
      {text}
    </button>
  );
};

export default Button;
