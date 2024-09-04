
import React from 'react';
import restauranthome from '../../assets/images/restauranthome.jpeg';


const HomePage = () => {
    return (
        <div className="homepage-container">
        <header className="homepage-header">
          <h1>Your Heading Here</h1>
          <p className="homepage-subparagraph">Your subparagraph text goes here. This is a brief description or additional information.</p>
        </header>
        <section className="homepage-content">
          

        
          <div className="image-only">
          <img src={restauranthome} alt="Just an Image" />
            <button className="reservation-button">Make a Reservation</button>
          </div>
        </section>
      </div>
    );
  }

export default HomePage;


