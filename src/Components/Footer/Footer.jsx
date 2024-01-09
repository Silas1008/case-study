import React from 'react';
import './Footer.css';

const Footer = () => {
  const email = 'athizameiromero@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="footer" style={{marginTop: "100px"}}>
      <p className="center-text">Let's work together</p>
      <p className="email" onClick={handleEmailClick}>
        {email}
      </p>
    </div>
  );
};

export default Footer;
