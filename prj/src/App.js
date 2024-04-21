import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Livre from './Livre';
import BarreNavigation from './BarreNavigation';
import Home from './Home';
import Contact from './Contact';
import './styles.css';
const App = () => {
  return (
    <Router>
      <div>
        <BarreNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livre" element={<Livre />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
