// Header.js
import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ userRole, isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

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
                    <li><a href="/contact">Contact</a></li>
                    {isAuthenticated && (
            <>
              {userRole === 'Admin' && (
                <>
                  <li><a href="/admin-dashboard">Dashboard</a></li>
                  <li><a href="/manage-users">Manage Users</a></li>
                  <li><a href="/reports">Reports</a></li>
                </>
              )}
              {userRole === 'RestaurantStaff' && (
                <>
                  <li><a href="/staff-dashboard">Dashboard</a></li>
                  <li><a href="/manage-reservations">Reservations</a></li>
                  <li><a href="/manage-queries">Queries</a></li>
                </>
              )}
              {userRole === 'Customer' && (
                <>
                  <li><a href="/my-reservations">My Reservations</a></li>
                  <li><a href="/profile">Profile</a></li>
                </>
              )}
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          )}

          {!isAuthenticated && (
            <>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            </>
          )}
                    
                </ul>
                
            </nav>
        </header>
    );
};

export default Header;




