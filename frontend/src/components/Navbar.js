import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, userRole, openLoginModal, handleLogout }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>

        {isAuthenticated ? (
          <>
            {userRole === 'Admin' && (
              <>
                <li><Link to="/admin-dashboard">Dashboard</Link></li>
                <li><Link to="/manage-users">Manage Users</Link></li>
                <li><Link to="/reports">Reports</Link></li>
              </>
            )}
            {userRole === 'RestaurantStaff' && (
              <>
                <li><Link to="/staff-dashboard">Dashboard</Link></li>
                <li><Link to="/manage-reservations">Reservations</Link></li>
                <li><Link to="/manage-queries">Queries</Link></li>
              </>
            )}
            {userRole === 'Customer' && (
              <>
                <li><Link to="/my-reservations">My Reservations</Link></li>
                <li><Link to="/profile">Profile</Link></li>
              </>
            )}
            <li>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li><a href="#" onClick={openLoginModal}>Login</a></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
