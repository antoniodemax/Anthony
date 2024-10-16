import React from 'react';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/[your-github-username]" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/[your-linkedin-username]/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://wa.me/[your-whatsapp-number]" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
