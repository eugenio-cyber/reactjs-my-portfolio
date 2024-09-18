import "./styles.css";
import Share from "../../assets/share.png";
import Button from "../../components/Button";

const Card = ({ project }) => {
  return (
    <a href={project.link} target='__blank'>
      <div className='card'>
        <img className='card__image' src={project.img} alt='projeto' />
        <div className='card__about'>
          <h3 className='card__name'>{project.title}</h3>
          <p className='card__description'>{project.text}</p>
          <p className='card__technologies'>
            {project.technologies.join(" | ")}
          </p>
        </div>
        <Button text='Visualizar' icon={Share} />
      </div>
    </a>
  );
};

export default Card;
