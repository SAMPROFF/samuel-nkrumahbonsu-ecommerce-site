import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//import Navbar from './components/Navbar';
import Laptops from './pages/Laptops';
import Phones from './pages/Phones';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      
      <div className="container">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/phones" element={<Phones />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};



export default App;
