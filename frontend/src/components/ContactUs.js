



import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
    const [queryText, setQueryText] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!queryText) {
            setErrorMessage('Query cannot be empty.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/queries', { queryText })
  .then(response => console.log(response))
  .catch(error => console.error(error));

            setResponseMessage('Your query has been submitted successfully.');
            setQueryText('');
        } catch (error) {
            setErrorMessage('Failed to submit your query. Please try again.');
        }
    };

    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="queryText">Your Query:</label>
                    <textarea
                        id="queryText"
                        value={queryText}
                        onChange={(e) => setQueryText(e.target.value)}
                        rows="5"
                        required
                    />
                </div>
                <button type="submit">Submit</button>
                {responseMessage && <p className="success-message">{responseMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default ContactUs;
