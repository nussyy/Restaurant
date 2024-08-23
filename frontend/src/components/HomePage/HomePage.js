import React, { Component } from 'react';
// import Navbar from './Navbar';
// import Header from './Header';

import Footer from '../Footer'; 
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        {/* <Navbar />
        <Header /> */}
        <main>
          <section className="overview">
            <h2>Welcome to ABC Restaurant</h2>
            <p>
              Experience the finest dining in Sri Lanka with a variety of cuisines and top-notch services.
            </p>
          </section>

          <section className="services">
            <h2>Our Services</h2>
            <ul>
              <li>Dine-In</li>
              <li>Takeaway</li>
              <li>Delivery</li>
            </ul>
          </section>

          <section className="offers">
            <h2>Special Offers</h2>
            <p>Check out our latest offers and discounts!</p>
          </section>
          
          <section className="gallery">
            <h2>Gallery</h2>
            <p>Explore our restaurant ambiance and dishes in our gallery section.</p>
          </section>
        </main>
 <Footer />
      </div>
    );
  }
}

export default HomePage;
