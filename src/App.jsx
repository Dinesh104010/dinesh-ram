// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Loginform from './components/Loginform';
import Signup from './components/Signup'; 
import FeaturedBrands  from './components/FeaturedBrands';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Loginform />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<FeaturedBrands />}></Route>
        <Route path="/about" element={<Aboutus></Aboutus>}></Route>
      </Routes>
    </Router>
  );
};

export default App;