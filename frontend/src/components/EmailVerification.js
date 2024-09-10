import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';

const EmailVerification = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/verify-email', { email })
      .then(response => {
        setMessage('Verification email sent! Please check your inbox.');
      })
      .catch(error => {
        setMessage('Error sending verification email.');
      });
  };

  return (
    <div className="email-verification">
      <h2>Email Verification</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" label="Verify Email" />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EmailVerification;
