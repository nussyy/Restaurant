import React, { useState } from 'react';
import axios from 'axios';

const Query = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/queries', {
        subject,
        message
      });
      alert('Query submitted successfully!');
    } catch (error) {
      console.error('There was an error submitting the query!', error);
    }
  };

  return (
    <div>
      <h2>Submit a Query</h2>
      <form onSubmit={handleSubmit}>
        <label>Subject:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </label>
        <label>Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <button type="submit">Submit Query</button>
      </form>
    </div>
  );
};

export default Query;
