import React, { useState } from 'react';
import profile from '../assets/p2.png';
import github from '../assets/logos/github.png';
import linkedin from '../assets/logos/linkedin.png';
import email from '../assets/logos/email.png';
import youtube from '../assets/logos/youtube.png';

export default function Home() {
  return (
    <div className="page-content">
      <section className="hero">
        <div className="hero-img">
          <img src={profile} alt="Adel portrait" />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">
            Full-stack web and brain developer<br />
            amateur thinker.
          </h1>
          <p className="hero-desc">
            Hi, I'm Adel. I love to read.<br />
            Some of my favorites: The Iliad & The Odyssey (epic bundle), The Little Prince and The Prince (yes, both ends of the spectrum), The Art of War, The Gallic Wars.  Oh — I also love computers. And yes, I can code.
          </p>
          <div className="hero-socials">
            <a href="https://github.com/ans9868" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/adel-sahuc-7098791a8/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="mailto:adel@sahuc.net" target="_blank" rel="noopener noreferrer"><img src={email} alt="Email" /></a>
            <a href="https://www.youtube.com/@AdelNour333" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
