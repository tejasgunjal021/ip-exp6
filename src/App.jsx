import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Title from './components/Title';
import About from './components/About';
import Campus from './components/Campus';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className='container'>
                <Title subtitle='Our DEPARTMENTS' title='What we Offer' />
                <Programs />
                <About setPlayState={setPlayState} />
                <Title subtitle='Gallery' title='Campus Photos' />
                <Campus />
                <Title subtitle='TESTIMONIALS' title='What Student Says' />
                <Testimonials />
                <Title title='Get in Touch' subtitle='CONTACT US' />
                <Contact />
              </div>
            </>
          } />
          {/* Other Routes */}
          <Route path="/programs" element={
            <div className='container'>
              <Title subtitle='Our Programs' title='What We Offer' />
              <Programs />
            </div>
          } />
          <Route path="/about" element={
            <div className='container'>
              <Title subtitle='About Us' title='Learn More' />
              <About setPlayState={setPlayState}/>
            </div>
          } />
          <Route path="/campus" element={
            <div className='container'>
              <Title subtitle='Gallery' title='Campus Photos' />
              <Campus />
            </div>
          } />
          <Route path="/testimonials" element={
            <div className='container'>
              <Title subtitle='What Students Say' title='Testimonials' />
              <Testimonials />
            </div>
          } />
          <Route path="/contact" element={
            <div className='container'>
              <Title subtitle='Get in Touch' title='Contact Us' />
              <Contact />
            </div>
          } />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
        <Footer />
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </Router>
  );
}

export default App;
