import React, { useState } from 'react';
import api from '../api/api';

const ObservationForm = () => {
  const [bodyOfWater, setBodyOfWater] = useState('');
  const [algaeLevel, setAlgaeLevel] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await api.post('/observations/', {
        body_of_water: bodyOfWater,
        algae_level: algaeLevel,
        description: description,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      console.log(response.data);
      // Handle successful observation creation
      // For example, clear the form or show a success message
      setBodyOfWater('');
      setAlgaeLevel('');
      setDescription('');
    } catch (error) {
      console.error('Error:', error);
      // Handle error in observation creation
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Create New Observation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Body of Water</label>
          <input
            type="text"
            value={bodyOfWater}
            onChange={(e) => setBodyOfWater(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block">Algae Level</label>
          <input
            type="number"
            step="0.1"
            value={algaeLevel}
            onChange={(e) => setAlgaeLevel(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ObservationForm;