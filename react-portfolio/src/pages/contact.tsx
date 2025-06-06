import React from 'react';
import github from '../assets/logos/github.png';
import linkedin from '../assets/logos/linkedin.png';
import email from '../assets/logos/email.png';
import youtube from '../assets/logos/youtube.png';
import '../styles/contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Get in Touch</h1>
        <p className="contact-desc">
          Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="hero-socials">
          <a href="https://github.com/ans9868" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/adel-sahuc-7098791a8/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="mailto:adel@sahuc.net" target="_blank" rel="noopener noreferrer"><img src={email} alt="Email" /></a>
          <a href="https://www.youtube.com/@AdelNour333" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" /></a>
        </div>
      </div>
    </section>
  );
}
