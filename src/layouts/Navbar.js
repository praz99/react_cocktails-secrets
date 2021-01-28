import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="navbar-container">
    <div className="banner">
      <a href="/" data-testid="navbar-heading">The CockTails</a>
    </div>
    <div className="slogan">
      <span>Find your drink...</span>
      <span>Learn to make</span>
      <div>Enjoy!</div>
    </div>
  </div>
);

export default Navbar;
