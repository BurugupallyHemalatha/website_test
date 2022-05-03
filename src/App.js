import React from 'react';
import './App.css';
import Login from './Component/Login';
import Table from './Component/Table';
import RecruiterScreen from './Component/RecruiterScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ForgotPassword from './Component/ForgotPassword';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recruiterScreen" element={<RecruiterScreen />} />
        <Route path="/table" element={<Table />} />
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
