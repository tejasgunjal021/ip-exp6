import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className='simple-footer'>
      <p>&copy; 2024 Vivekanand Education Society Institute of Technology.All Rights Reserved.</p>
      <div className='social-icons'>
        <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-linkedin '></i>
        </a>
        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-instagram'></i>
        </a>
        <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-twitter'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
    