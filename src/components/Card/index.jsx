import "./styles.css";
import Share from "../../assets/share.png";
import Button from "../../components/Button";

const Card = ({ project }) => {
  return (
    <div className='card'>
      <img className='card__image' src={project.img} alt='projeto' />
      <div className='card__about'>
        <h3 className='card__name'>{project.title}</h3>
        <p className='card__description'>{project.text}</p>
        <p className='card__technologies'>{project.technologies.join(" | ")}</p>
        <a
          className='link'
          href={project.link}
          target='_blank'
          rel='noreferrer'
        >
          <Button text='Visualizar' icon={Share} />
        </a>
      </div>
    </div>
  );
};

export default Card;
