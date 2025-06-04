import React from 'react';
import github from '../assets/logos/github.png';
import linkedin from '../assets/logos/linkedin.png';
import email from '../assets/logos/email.png';
import youtube from '../assets/logos/youtube.png';

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-desc">
        Thanks for checking out my little site!<br />
        The best place to contact me would be my mail address: <a href="mailto:adel@sahuc.net">adel@sahuc.net</a>.<br />
        I try and check it every 24 hours.
      </p>
      <div className="contact-socials">
        <a href="https://github.com/ans9868" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/adel-sahuc-7098791a8/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
        <a href="mailto:adel@sahuc.net" target="_blank" rel="noopener noreferrer"><img src={email} alt="Email" /></a>
        <a href="https://www.youtube.com/@AdelNour333" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" /></a>
      </div>
    </section>
  );
}
