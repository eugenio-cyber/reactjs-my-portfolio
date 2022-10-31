import "./styles.css";

const CompanyButton = ({ companyName }) => {
  return (
    <div className='company-button--border'>
      <button className='company-button--active'>{companyName}</button>
    </div>
  );
};

export default CompanyButton;
