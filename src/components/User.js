import { useState } from 'react';
import React from 'react';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook
import axios from '../api/axios'; 

const User = () => {
    const { auth } = useAuth(); // Access the authentication context using the useAuth hook
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/profile', {
                firstName,
                middleName,
                lastName,
                age
            });

            setSuccessMessage(response.data.message);
        } catch (error) {
            setErrorMessage('Failed to update profile');
            console.error('Error updating profile:', error);
        }
    };

    return (
        <section>
            <h1>Welcome, {firstName}</h1> {/* Render the username from the authentication context */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="middleName">Middle Name:</label>
                <input
                    type="text"
                    id="middleName"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <button type="submit">Update Profile</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </section>
    );
}

export default User;
