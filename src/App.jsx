import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bridge from './components/Bridge';
import Features from './components/Features';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Sponsor from './pages/Sponsor';
import Contact from './pages/Contact';
import About from './pages/About';
import Story from './components/Story';

const Home = () => (
  <div>
    <Hero />
    <Bridge />
    <Features />
    <Story />
  </div>
);

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Router basename="/Hpliondancechicago">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsor" element={<Sponsor />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
