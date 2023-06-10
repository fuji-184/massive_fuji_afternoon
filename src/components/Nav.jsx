import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navigation border">
      <div className="navigation-container">
        <Link to="/" className="logo">FUJI</Link>

        <div
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={handleMobileMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`menu ${isMobileMenuOpen ? 'active border' : ''}`}>
          <li><Link to="/" className="logo">Home</Link></li>
          <li><Link to="/upload_dan_play" className="logo">Upload & Play</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
