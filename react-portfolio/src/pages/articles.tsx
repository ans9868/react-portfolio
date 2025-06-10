import React from 'react';
import medium1 from '../assets/logos/medium1.0.png';
import youtube from '../assets/logos/youtube.png';

export default function Articles() {
  return (
    <div className="page-content">
      <section className="blog-section">
        <h2 className="blog-title">Blog</h2>
        <p className="blog-desc">
          I "blog" on YouTube and Medium—go check it out!
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem' }}>
            <a href="https://medium.com/@adelnsahuc" target="_blank" rel="noopener noreferrer">
              <img src={medium1} alt="Medium" style={{ width: 32, height: 32, verticalAlign: 'middle', borderRadius: '20%' }} />
            </a>
            <a href="https://www.youtube.com/@AdelNour333" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" style={{ width: 32, height: 32, verticalAlign: 'middle', borderRadius: '20%' }} />
            </a>
          </span>
        </p>
      </section>
      {/* ...existing blog content... */}
    </div>
  );
}
