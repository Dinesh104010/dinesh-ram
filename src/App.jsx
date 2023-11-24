// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Loginform from './components/Loginform';
import Signup from './components/Signup'; 
import FeaturedBrands  from './components/FeaturedBrands';
import Individual from './components/Individual';
import Teamspo from './components/Teamspo';
import Jersy1 from './components/Jersy1';
import Fitne from './components/Fitne';
import Tropies from './components/Tropies';
import Accessories from './components/Accessories';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Loginform />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<FeaturedBrands />}></Route>
        <Route path="/about" element={<Aboutus></Aboutus>}></Route>
        <Route path="/volleyball" element={<Individual/>}></Route>
        <Route path="/team" element={<Teamspo></Teamspo>}></Route>
        <Route path="/jersy" element={<Jersy1></Jersy1>}></Route>
        <Route path="/fitness" element={<Fitne></Fitne>}></Route>
        <Route path="/trophy" element={<Tropies></Tropies>}></Route>
        <Route path="/access" element={<Accessories></Accessories>}></Route>
      </Routes>
    </Router>
  );
};

export default App;