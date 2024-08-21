import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Menu from './components/Menu';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
