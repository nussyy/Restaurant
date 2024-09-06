import React, { useRef } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Login from '../components/Auth/Login';
import { useNavigate } from 'react-router-dom';

const Header = ({ userRole, isAuthenticated, onLogout }) => {
  const loginModalRef = useRef(); // Ref for the Login modal

  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogout = () => {
    onLogout();
    navigate('/login'); // Use navigate to redirect after logout
  };

  const openLoginModal = () => {
    if (loginModalRef.current) {
      loginModalRef.current.openModal(); // Open the login modal
    }
  };


  
  // const handleLogout = () => {
  //   onLogout();
  //   navigate('/login');
  // };

  // const openLoginModal = () => {
  //   if (loginModalRef.current) {
  //     loginModalRef.current.openModal(); // Open modal using the ref
  //   }
  // };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ABC Restaurant</Link>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/offers">Offers</Link></li>
          <li><Link to="/contact">Contact</Link></li>

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
              <li>
                {/* Trigger modal on click */}
                <a href="#" onClick={openLoginModal}>Login</a>
              </li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
      {/* Include Login component and pass ref */}
      <Login ref={loginModalRef} />
    </header>
  );
};

export default Header;
