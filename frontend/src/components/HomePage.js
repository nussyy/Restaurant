// Example for HomePage.js
import React from 'react'; 

const HomePage = () => {
    return (
        <div className="home-container">
          {/* Hero Section */}
          <section className="hero-section">
            <h1>Welcome to ABC Restaurant</h1>
            <p>Experience the best dining experience in Sri Lanka</p>
            <button className="cta-button">Explore Our Menu</button>
          </section>
    
          {/* Overview Section */}
          <section className="overview-section">
            <h2>About Us</h2>
            <p>
              ABC Restaurant is a renowned restaurant chain located in multiple cities across Sri Lanka. 
              We offer a variety of cuisines prepared by expert chefs using the freshest ingredients. 
              Whether you're in the mood for a casual meal or a fine dining experience, ABC Restaurant has something for everyone.
            </p>
          </section>
    
          <section className="services-section">
            <h2>Our Services</h2>
            <div className="services-list">
              <div className="service-item">
                <h3>Dine-In</h3>
                <p>Enjoy a memorable dining experience at our beautifully designed restaurants.</p>
              </div>
              <div className="service-item">
                <h3>Takeaway</h3>
                <p>Order your favorite dishes to go, prepared fresh and ready for pickup.</p>
              </div>
              <div className="service-item">
                <h3>Delivery</h3>
                <p>Get your meals delivered hot and fresh right to your doorstep.</p>
              </div>
            </div>
          </section>
    
          {/* Special Offers Section */}
          <section className="offers-section">
            <h2>Special Offers</h2>
            <div className="offers-list">
              <div className="offer-item">
                <h3>Buy One Get One Free</h3>
                <p>Available on select pizzas every Monday.</p>
              </div>
              <div className="offer-item">
                <h3>Happy Hour</h3>
                <p>50% off on drinks every Friday from 5 PM to 7 PM.</p>
              </div>
              <div className="offer-item">
                <h3>Family Feast</h3>
                <p>Special discounts on family meals every weekend.</p>
              </div>
            </div>
          </section>
    
          {/* Facilities Section */}
          <section className="facilities-section">
            <h2>Our Facilities</h2>
            <div className="facilities-list">
              <div className="facility-item">
                <h3>Free Wi-Fi</h3>
                <p>Stay connected with our complimentary high-speed internet.</p>
              </div>
              <div className="facility-item">
                <h3>Private Dining Rooms</h3>
                <p>Host your special events in our private dining areas.</p>
              </div>
              <div className="facility-item">
                <h3>Outdoor Seating</h3>
                <p>Enjoy your meal in the open air with our comfortable outdoor seating.</p>
              </div>
            </div>
          </section>
    
          {/* Gallery Section */}
          <section className="gallery-section">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              <img src="/images/restaurant1.jpg" alt="Restaurant interior" />
              <img src="/images/restaurant2.jpg" alt="Dishes on the table" />
              <img src="/images/restaurant3.jpg" alt="Outdoor seating area" />
              <img src="/images/restaurant4.jpg" alt="Special dish" />
            </div>
          </section>
        </div>
      );

};

export default HomePage;


