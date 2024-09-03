import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">ABC Restaurant</Link>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;