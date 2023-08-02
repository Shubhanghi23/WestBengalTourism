import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Services';
import Destination from './Destination';
import SignUp from './SignUp';

function ParentRouter() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/destination' element={<Destination/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default ParentRouter;