import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import Navigation from './components/Navigation';
import Crew  from './pages/Crew';
import Destination from './pages/Destination';
import Home  from './pages/Home';
import Technology from './pages/Technology';

function App() {
  return (
    <>
    <Navigation />
    <Routes>

      <Route path="/Home" element={<Home />} />
      <Route path="/Crew" element={<Crew />} />
      <Route path="/Destination" element={<Destination />} />
      <Route path="/Technology" element={<Technology />} />
      
    </Routes>
    </>
  );
}

export default App;
