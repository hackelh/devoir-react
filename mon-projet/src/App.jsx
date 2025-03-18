import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Home from './pages/Home';
import HotelsPage from './pages/HotelsPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </Router>
  );
}

export default App;
