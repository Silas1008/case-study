// Navbar.js

import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const email = 'athizameiromero@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleResumeDownload = () => {
    window.open('/path/to/your/resume.pdf', '_blank');
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <Link to="/" style={{textDecoration: "none", color: "black"}}><span className="name">AR</span></Link>
      </div>
      <div className="right-section">
        <span className="email" onClick={handleEmailClick}>
          {email}
        </span>
        <button className="resume-button" onClick={handleResumeDownload}>
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
