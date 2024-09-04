// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/">ABC Restaurant</a>
            </div>
            <nav className="nav">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/offers">Offers</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
