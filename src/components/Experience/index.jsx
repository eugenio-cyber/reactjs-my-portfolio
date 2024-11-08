import "./styles.scss";
import { useState } from "react";
import companies from "../../utils/companies.js";

const Experience = () => {
  const [companyState, setCompanyState] = useState("erural");

  return (
    <section className='experience container section' id='experience'>
      <h2 className='experience__title'>Experiências</h2>
      <div className='experience__data'>
        <div className='experience__companies'>
          <div>
            {companies.map((company) => (
              <button
                className={`company-button${
                  companyState === company.name ? "--active" : ""
                }`}
                onClick={() => setCompanyState(company.name)}
              >
                {company.name}
              </button>
            ))}
          </div>
        </div>
        {companies.map((company) => {
          return company.name === companyState ? (
            <div className='experience__description'>
              <div className='experience__header'>
                <h2 className='experience__office'>{company.occupation}</h2>
                <span className='experience__period'>{company.period}</span>
              </div>
              <span className='experience__company-name'>{company.name}</span>
              <p className='experience__paragraph'>{company.description}</p>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
