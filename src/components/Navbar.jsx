import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Clean up the event listener
  }, []);

  return (
    <nav className={`nav ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/programs">Program</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/campus">Campus</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact"><button className='btn'>Contact Us</button></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
