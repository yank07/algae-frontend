import React, { useEffect, useState } from 'react';
import api from '../api/api';

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/requests/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Requests</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id} className="border-b border-gray-200 py-2">
            <div>Request ID: {request.id}</div>
            <div>Body of Water: {request.body_of_water}</div>
            <div>Description: {request.description}</div>
            <div>Requested Date: {new Date(request.requested_date).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestList;
