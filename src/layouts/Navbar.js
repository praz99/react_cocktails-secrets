import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="navbar-container">
    <div className="banner">
      <Link to="/" data-testid="navbar-heading">The CockTails</Link>
    </div>
    <div className="slogan">
      <span>Find your drink...</span>
      <span>Learn to make</span>
      <div>Enjoy!</div>
    </div>
  </div>
);

export default Navbar;
