import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import Navigation from './components/Navigation';
import Crew  from './pages/Crew';
import Destination from './pages/Destination';
import Home  from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Technology from './pages/Technology';

function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/space-tourism" element={<Home />} />
      <Route path="/space-tourism/Home" element={<Home />} />
      <Route path="/space-tourism/Crew" element={<Crew />} />
      <Route path="/space-tourism/Destination" element={<Destination />} />
      <Route path="/space-tourism/Technology" element={<Technology />} />
      <Route path="/space-tourism/*" element={<PageNotFound/>} />
      
    </Routes>
    </>
  );
}

export default App;
