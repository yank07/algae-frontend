import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Observations from './components/Observations';
import ObservationForm from './components/ObservationForm';
import RequestList from './components/Requests';

// TODO hide Links depending on roles
function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="flex justify-between items-center bg-gray-800 p-4 text-white rounded">
          <h1 className="text-xl font-bold">Algae Monitor</h1>
          <div>
           
            <Link to="/observations" className="mr-4" >Observations</Link>
            <Link to="/create-observation" className="mr-4">Create Observation</Link>
            <Link to="/requests" className="mr-4">Requests</Link>
            <Link to="/login" className="mr-4">Login/Register</Link>
            
          </div>
        </nav>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/observations" element={<Observations />} />
          <Route path="/create-observation" element={<ObservationForm />} />
          <Route path="/requests" element={<RequestList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
