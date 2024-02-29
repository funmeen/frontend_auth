// In your UserDetail component
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

const UserDetail = () => {
  const { username } = useParams(); // Extract the username from URL parameters
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/${username}`); // Fetch user data based on username
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <section>
      {userData ? (
        <>
          <p>Name: {userData.firstName} {userData.middleName} {userData.lastName}</p>
          <p>Age: {userData.age}</p>
          {/* You can display other user details here */}
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </section>
  );
};

export default UserDetail;
