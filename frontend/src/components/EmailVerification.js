import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VerifyEmail = () => {
    const { token } = useParams();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                await axios.get(`http://localhost:8080/api/auth/verify?token=${token}`);
                alert('Email verified successfully!');
            } catch (error) {
                console.error(error);
            }
        };

        verifyEmail();
    }, [token]);

    return <div>Verifying your email...</div>;
};

export default VerifyEmail;
