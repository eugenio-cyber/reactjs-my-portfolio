import "./styles.css";
import { useState } from "react";
import { erural, cubos_academy, digital_seller } from "../../companies";

const Experience = () => {
  const [company, setCompany] = useState("erural");

  return (
    <section className='experience container section' id='experience'>
      <h2 className='experience__title'>Experiências</h2>
      <div className='experience__data'>
        <div className='experience__companies'>
          <div className='company-button--border'>
            <button
              className={`company-button${
                company === "erural" ? "--active" : ""
              }`}
              onClick={() => setCompany("erural")}
            >
              erural
            </button>
            <button
              className={`company-button${
                company === "Cubos Academy" ? "--active" : ""
              }`}
              onClick={() => setCompany("Cubos Academy")}
            >
              Cubos Academy
            </button>
            <button
              className={`company-button${
                company === "Digital Seller" ? "--active" : ""
              }`}
              onClick={() => setCompany("Digital Seller")}
            >
              Digital Seller
            </button>
          </div>
        </div>
        {company === erural.name && (
          <div className='experience__description'>
            <div className='experience__header'>
              <h2 className='experience__office'>{erural.occupation}</h2>
              <span className='experience__period'>{erural.period}</span>
            </div>
            <span className='experience__company-name'>{erural.name}</span>
            <p className='experience__paragraph'>{erural.description}</p>
          </div>
        )}
        {company === cubos_academy.name && (
          <div className='experience__description'>
            <div className='experience__header'>
              <h2 className='experience__office'>{cubos_academy.occupation}</h2>
              <span className='experience__period'>{cubos_academy.period}</span>
            </div>
            <span className='experience__company-name'>
              {cubos_academy.name}
            </span>
            <p className='experience__paragraph'>{cubos_academy.description}</p>
          </div>
        )}
        {company === digital_seller.name && (
          <div className='experience__description'>
            <div className='experience__header'>
              <h2 className='experience__office'>
                {digital_seller.occupation}
              </h2>
              <span className='experience__period'>
                {digital_seller.period}
              </span>
            </div>
            <span className='experience__company-name'>
              {digital_seller.name}
            </span>
            <p className='experience__paragraph'>
              {digital_seller.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
