// AboutUs.js
import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="hero">
        <h1>Welcome to ABC Restaurant – Where Flavor Meets Tradition</h1>
        <img src="/path/to/hero-image.jpg" alt="Restaurant Interior" className="hero-image" />
      </section>
      <section className="introduction">
        <p>
          At ABC Restaurant, we blend the essence of Sri Lankan tradition with modern culinary techniques. Our menu features a wide range of dishes made from locally-sourced ingredients, ensuring a dining experience like no other.
        </p>
      </section>
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2010, ABC Restaurant started as a small eatery in Colombo. Over the years, we’ve expanded across Sri Lanka, building a reputation for our exceptional food and outstanding service. Our commitment to quality and customer satisfaction has earned us numerous awards and loyal patrons.
        </p>
      </section>
      <section className="meet-the-team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src="/path/to/chef-arun.jpg" alt="Chef Arun Kumar" className="team-photo" />
          <h3>Chef Arun Kumar</h3>
          <p>With over 20 years of experience, Chef Arun brings a unique touch to traditional Sri Lankan cuisine. His innovative approach and dedication to quality have made him a favorite among our guests.</p>
        </div>
      </section>
      <section className="our-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> We use only the finest ingredients.</li>
          <li><strong>Integrity:</strong> We maintain the highest standards in everything we do.</li>
          <li><strong>Community:</strong> We are dedicated to making a positive impact in our local communities.</li>
        </ul>
      </section>
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-images">
          <img src="/path/to/gallery1.jpg" alt="Dish 1" className="gallery-image" />
          <img src="/path/to/gallery2.jpg" alt="Dish 2" className="gallery-image" />
        </div>
      </section>
      <section className="call-to-action">
        <p>Ready to enjoy an unforgettable dining experience? <a href="/reservations">Book a table</a> with us today!</p>
      </section>
      <footer className="footer">
        <p>ABC Restaurant | 123 Main Street, Colombo, Sri Lanka | Phone: +94 123 456 789 | Email: info@abcrestaurant.lk</p>
        <p>Follow us on <a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Twitter</a></p>
      </footer>
    </div>
  );
};

export default AboutUs;
