import { useState, useEffect } from 'react';
import axios from 'axios';

function Strapi() {
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
  // eslint-disable-next-line no-console
  console.log(data);
}

export default Strapi;
