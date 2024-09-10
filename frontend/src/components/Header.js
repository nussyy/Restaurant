import React, { useRef } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Navbar from './Navbar'; // Import the Navbar component

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

  return (
    <header className="header">
      <div className="logo">
        <a href="/">ABC Restaurant</a>
      </div>

      {/* Integrating Navbar here */}
      <Navbar isAuthenticated={isAuthenticated} userRole={userRole} openLoginModal={openLoginModal} handleLogout={handleLogout} />

      {/* Include Login component and pass ref */}
      <Login ref={loginModalRef} />
    </header>
  );
};

export default Header;
