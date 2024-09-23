import React from 'react';
import '../styles/personalinformation.css';
const PersonalInformation = () => {
  return (
    <div>
      <div className="personal-information-container">
        <div className="personal-information">
          <div className="personal-info">
            <p className='personal-info-title'>Personal Information</p>
            <p>edit</p>
          </div>
          <div className="personal-info">
            <p>First Name</p>
            <p>John</p>
          </div>
          <div className="personal-info">
            <p>Last Name</p>
            <p>--</p>
          </div>
          <div className="personal-info">
            <p>Birthday</p>
            <p>12/09/2000</p>
          </div>
          <div className="personal-info">
            <p>Gender</p>
            <p>Male</p>
          </div>
        </div>
        <div className="contact-information">
          <div className="contact-info">
            <p>Contact Information</p>
            <p>edit</p>
          </div>
          <div className="contact-info">
            <p>Email:</p>
            <p>Johndo23@gmail.com</p>
          </div>
          <div className="contact-info">
            <p>Mobile:</p>
            <p>--</p>
          </div>
          <div className="contact-info">
            <p>Password:</p>
            <p>******</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
