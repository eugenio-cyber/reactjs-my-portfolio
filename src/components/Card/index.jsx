import "./styles.css";
import Share from "../../assets/share.png";
import Button from "../../components/Button";

const Card = ({ img }) => {
  return (
    <div className='card'>
      <img className='card__image' src={img} alt='projeto' />
      <div className='card__about'>
        <h3 className='card__name'>Nome do projeto</h3>
        <p className='card__description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          blandit interdum odio eu varius.
        </p>
        <p className='card__technologies'>Tecnologias usadas no projeto</p>
        <Button text='Visualizar' icon={Share} />
      </div>
    </div>
  );
};

export default Card;
