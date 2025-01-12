import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bridge from './components/Bridge';
import Features from './components/Features';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Sponsor from './pages/Sponsor';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';

const Home = () => (
  <div>
    <Hero />
    <Bridge />
    <Features />
  </div>
);

const App = () => {
  const location = useLocation();
  const noFooterPaths = ['/services'];

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!noFooterPaths.includes(location.pathname) && <Footer />} 
    </main>
  );
};

export default App;
