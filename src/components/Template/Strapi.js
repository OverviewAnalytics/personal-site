import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Strapi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/uploads/lighthouse_9fb6a2392d.jpeg');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
};

export default Strapi;
