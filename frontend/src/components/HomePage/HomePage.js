import React from 'react';
import './HomePage.css';

class HomePage extends React.Component {
  render() {
    return (
      <main className="homepage">
        {/* Introduction Section */}
        <section className="intro">
          <h2>Welcome to ABC Restaurant</h2>
          <p>
            Experience the best dining experience with our delicious meals and exceptional service across Sri Lanka.
          </p>
        </section>

        {/* Overview Section */}
        <section className="overview">
          <h3>About Us</h3>
          <p>
            ABC Restaurant is a renowned restaurant chain with branches in multiple cities. We are committed to providing top-notch hospitality and a wide variety of meals to our customers.
          </p>
        </section>

        {/* Services Section */}
        <section className="services">
          <h3>Our Services</h3>
          <ul>
            <li>Dine-In</li>
            <li>Takeaway</li>
            <li>Online Reservations</li>
            <li>Home Delivery</li>
          </ul>
        </section>

        {/* Offers Section */}
        <section className="offers">
          <h3>Current Offers</h3>
          <p>Enjoy a 20% discount on your first online reservation!</p>
        </section>

        {/* Facilities Section */}
        <section className="facilities">
          <h3>Facilities</h3>
          <ul>
            <li>Free Wi-Fi</li>
            <li>Private Dining Rooms</li>
            <li>Outdoor Seating</li>
            <li>Parking Available</li>
          </ul>
        </section>

        {/* Gallery Section */}
        <section className="gallery">
          <h3>Gallery</h3>
          <div className="image-gallery">
            <img src="image1.jpg" alt="Delicious Meal" />
            <img src="image2.jpg" alt="Restaurant Interior" />
            <img src="image3.jpg" alt="Outdoor Seating" />
          </div>
        </section>

        {/* Online Reservation Section */}
        <section className="reservation">
          <h3>Reserve a Table</h3>
          <button className="reserve-btn">Book Now</button>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <h3>Contact Us</h3>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Submit Query</button>
          </form>
        </section>
      </main>
    );
  }
}

export default HomePage;
