import React from 'react';
import './about.css';
import about_img from '../assets/about.png';
import play_icon from '../assets/play.png';

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true); }} />
      </div>
      <div className='about-right'>
        <h3>ABOUT VESIT </h3>
        <h2>Shaping the Leaders of Tomorrow</h2>
        <p>At VESIT College, we are dedicated to empowering students with the knowledge and skills they need to succeed in the future. Our vibrant community fosters creativity, innovation, and excellence, ensuring that every student is well-prepared for their career and beyond.<br></br><br></br>

          We offer a diverse range of programs designed to ignite curiosity and passion in various fields, including engineering, technology, and management. Our experienced faculty members are committed to providing personalized guidance and support, helping students achieve their academic and personal goals.</p>
      </div>
    </div>
  );
}

export default About;
