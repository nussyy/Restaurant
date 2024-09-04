
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Service from './components/Service';
import Menu from './components/Menu';
import Offer from './components/Offer';
import Reservations from './components/Reservations';
import ContactUs from './components/ContactUs';
import Header from './components/Header';

const RoutesComponent= () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<Service />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/offers" element={<Offer />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;
