import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Robotics from './pages/programs/Robotics';
import Programming from './pages/programs/Programming';
import Maker from './pages/programs/Maker';
import Community from './pages/programs/Community';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/robotics" element={<Robotics />} />
          <Route path="/programs/programming" element={<Programming />} />
          <Route path="/programs/maker" element={<Maker />} />
          <Route path="/programs/community" element={<Community />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;