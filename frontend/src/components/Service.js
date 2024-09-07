


// import React from 'react';

// const Service = () => {
//     return (
//         <div>
//             <h1>this is the service page</h1>
            
//         </div>
//     );
// };

// export default Service;



// ServicePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Service = () => {
  const [services, setServices] = useState([]);
  const [query, setQuery] = useState({
    name: '',
    email: '',
    serviceId: '',
    message: ''
  });

  // Fetch services from the backend
  // useEffect(() => {
  //   axios.get('/api/services')
  //     .then(response => setServices(response.data))
  //     .catch(error => console.error('Error fetching services', error));
  // }, []);

  // Fetch services from the backend
  useEffect(() => {
    axios.get('http://localhost:8080/api/services')  // Ensure the correct URL
      .then(response => {
        console.log(response.data);  // Log the response data
        setServices(response.data);
      })
      .catch(error => console.error('Error fetching services', error));
  }, []);
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/queries', query)
      .then(response => alert('Query submitted successfully!'))
      .catch(error => console.error('Error submitting query', error));
  };

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* <h1>Our Services</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: {service.price} LKR</p>
          </li>
        ))}
      </ul> */}

      <h2>Submit Your Query</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={query.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={query.email} 
          onChange={handleChange} 
          required 
        />
        <select 
          name="serviceId" 
          value={query.serviceId} 
          onChange={handleChange} 
          required
        >
          <option value="">Select a Service</option>
          {services.map(service => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={query.message} 
          onChange={handleChange} 
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Service;

