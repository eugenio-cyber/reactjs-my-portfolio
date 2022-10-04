import "./styles.css";

const Button = ({ text, icon, color }) => {
  return (
    <button className={`button ${color === 'purple' ? 'button--purple' : 'button--blue'}`}>
      <img className="button__icon" src={icon} alt="Ícone do botão" />
      {text}
    </button>
  );
};

export default Button;