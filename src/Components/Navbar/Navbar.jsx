import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const PDF_FILE_URL = '/resume.pdf';

const Navbar = () => {
  const email = 'athizameiromero@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}><span className="name">AR</span></Link>
      </div>
      <div className="right-section">
        <span className="email" onClick={handleEmailClick}>
          {email}
        </span>
        <a href={PDF_FILE_URL} download="resume.pdf">
          <button className="resume-button">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
