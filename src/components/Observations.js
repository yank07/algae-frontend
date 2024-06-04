import React, { useEffect, useState } from 'react';
import api from '../api/api';

const Observations = () => {
  const [observations, setObservations] = useState([]);

  useEffect(() => {
    const fetchObservations = async () => {
      try {
        const response = await api.get('/observations/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setObservations(response.data);
      } catch (error) {
        console.error('Error fetching observations:', error);
      }
    };

    fetchObservations();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Observations</h2>
      <ul>
        {observations.map((observation) => (
          <li key={observation.id} className="border-b border-gray-200 py-2">
            <div>Body of Water: {observation.body_of_water}</div>
            <div>Algae Level: {observation.algae_level}</div>
            <div>Description: {observation.description}</div>
            <div>Observation Date: {new Date(observation.observation_date).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Observations;
