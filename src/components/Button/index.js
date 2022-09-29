import "./styles.css";

const Button = ({ text, icon, color }) => {
  return (
    <button className="button" style={{ border: `2px solid ${color}` }}>
      <img className="button__icon" src={icon} alt="Ícone do botão" />
      {text}
    </button>
  );
};

export default Button;
