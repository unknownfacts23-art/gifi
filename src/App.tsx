import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import BirthdayMessage from './pages/BirthdayMessage';
import PhotoGallery from './pages/PhotoGallery';
import LoveLetter from './pages/LoveLetter';
import Celebration from './pages/Celebration';
import FloatingHearts from './components/FloatingHearts';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-red-100 relative overflow-hidden">
        <FloatingHearts />
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/birthday-message" element={<BirthdayMessage />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/love-letter" element={<LoveLetter />} />
            <Route path="/celebration" element={<Celebration />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;