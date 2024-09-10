import React, { useState } from 'react';
import axios from 'axios';

const Reservation = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('dine-in');
  const [status, setStatus] = useState('pending');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/reservations', {
        date,
        time,
        type,
        status
      });
      alert('Reservation made successfully!');
    } catch (error) {
      console.error('There was an error making the reservation!', error);
    }
  };

  return (
    <div>
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </label>
        <label>Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="dine-in">Dine-in</option>
            <option value="delivery">Delivery</option>
          </select>
        </label>
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default Reservation;
