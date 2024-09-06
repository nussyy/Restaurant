

import React from 'react';
import restauranthome from '../../assets/images/restauranthome.jpeg';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; 
// import Slider from './Offer'; 
// import Footer from './Footer'; 

const HomePage = () => {

    const navigate = useNavigate(); // Initialize the navigate function

    const handleReservationClick = () => {
        navigate('/reservations'); // Navigate to the reservations page
    };

    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>Indulge in a Unique Dining Experience</h1>
                <p className="homepage-subparagraph">Discover ABC Restaurant's signature ambiance and world-class cuisine. Our commitment to excellence ensures that every visit is memorable, whether you’re enjoying a quiet dinner or celebrating with friends.</p>
                <button className="reservation-button" onClick={handleReservationClick}>
                    Make a Reservation
                </button>
            </header>
            <section className="homepage-content">
                <div className="image-only">
                    <img src={restauranthome} alt="Just an Image" />
                </div>
            </section>
            {/* <Slider /> {/* Slider for offers */}
            {/* <Footer /> Footer */ }
        </div>
    );
}

export default HomePage;
