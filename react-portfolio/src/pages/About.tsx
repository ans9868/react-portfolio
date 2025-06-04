import React, { useState } from 'react';

export default function About() {
  const [coffee, setCoffee] = useState(1);
  const [imposter, setImposter] = useState(0);
  const [productivity, setProductivity] = useState({
    js: 30,
    python: 30,
    pyspark: 30,
    ml: 30,
    fullstack: 30,
    cpp: 30,
  });

  function updateProductivity(coffeeValue: number, imposterValue: number) {
    // Normalize sliders: coffee 1-10 -> 0-1, imposter 0-100 -> 0-1
    const xCoffee = (coffeeValue - 1) / 9;
    const xImposter = imposterValue / 100;
    // Use cos(20x) and sin(20x) for erratic effect, scale to [10, 60]
    function meter(val: number) {
      return 35 + 25 * val; // scale [-1,1] to [10,60]
    }
    setProductivity({
      js: Math.max(10, Math.min(60, meter(Math.cos(20 * xCoffee) + Math.sin(20 * xImposter)))),
      python: Math.max(10, Math.min(60, meter(Math.cos(20 * xCoffee + 1) + Math.sin(20 * xImposter + 1)))),
      pyspark: Math.max(10, Math.min(60, meter(Math.cos(20 * xCoffee + 2) + Math.sin(20 * xImposter + 2)))),
      ml: Math.max(10, Math.min(60, meter(Math.cos(20 * xCoffee + 3) + Math.sin(20 * xImposter + 3)))),
      fullstack: Math.max(10, Math.min(60, meter(Math.cos(20 * xCoffee + 4) + Math.sin(20 * xImposter + 4)))),
      cpp: Math.max(10, Math.min(60, meter(Math.cos(20 * xCoffee + 5) + Math.sin(20 * xImposter + 5)))),
    });
  }

  function handleCoffeeSlider(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value, 10);
    setCoffee(value);
    updateProductivity(value, imposter);
  }

  function handleImposterSlider(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(e.target.value);
    setImposter(value);
    updateProductivity(coffee, value);
  }

  return (
    <div className="about-two-col">
      <div className="about-left">
        <h2 className="about-title">What I Do?</h2>
        <p className="about-desc">
        <p className="about-desc">
           I am very curious and a very quick learner. Sometimes I get so excited about a new idea that I just have to try it out.
          
        </p> Currently, I'm studying Computer Science at <strong>NYU Tandon School of Engineering</strong> and will be graduating in May of 2026.
          <br /><br />
          I hold a couple of certificates I am proud of:&nbsp;
          <strong><a href="https://fullstackopen.com/en/" target="_blank" rel="noopener noreferrer">Full Stack Web Development Certificate (University of Helsinki)</a></strong> 
           &nbsp;and&nbsp;
          <strong><a href="https://engineering.nyu.edu/life-tandon/tandon-career-hub/resources-students/data-science-bootcamp" target="_blank" rel="noopener noreferrer">Data Science Bootcamp Certificate (NYU Tandon)</a></strong>.
          <br /><br />
          Why do I keep chasing certificates? Because they <em>force</em> me to work on the fundamentals I'd otherwise ignore. For example, in the
          Fullstack course, I tackled the "unsexy" topic of unit testing. Let me say that it was by far one of my least favorite topics in the course but now it's by far my most distinguished skill. Unit testing, along with the test first mentality has helped me catch a lot of bugs of my own code and my coworkers' which helps me from fixing their code later ;). I think its an expecially important skill now, when we increasingly depend on AI-generated code which might not be as reliable as we think.
          <br /><br />
          Overall these structured learning paths keep me grounded, give me time to explore my interests, and push me to build the kind of software I actually believe in. Go do checkout my projects.
        </p>
      </div>
      <div className="about-right">
        <div className="skills-section">
          <div className="skill-bar">
            <span className="skill-label">Full-stack web-dev</span>
            <span className="skill-value">{productivity.fullstack.toFixed(1)}%</span>
            <div className="bar-bg">
              <div className="bar-fill fullstack" style={{width: `${productivity.fullstack}%`}}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span className="skill-label">JavaScript</span>
            <span className="skill-value">{productivity.js.toFixed(1)}%</span>
            <div className="bar-bg">
              <div className="bar-fill js" style={{width: `${productivity.js}%`}}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span className="skill-label">Python</span>
            <span className="skill-value">{productivity.python.toFixed(1)}%</span>
            <div className="bar-bg">
              <div className="bar-fill python" style={{width: `${productivity.python}%`}}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span className="skill-label">PySpark</span>
            <span className="skill-value">{productivity.pyspark.toFixed(1)}%</span>
            <div className="bar-bg">
              <div className="bar-fill pyspark" style={{width: `${productivity.pyspark}%`}}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span className="skill-label">ML</span>
            <span className="skill-value">{productivity.ml.toFixed(1)}%</span>
            <div className="bar-bg">
              <div className="bar-fill ml" style={{width: `${productivity.ml}%`}}></div>
            </div>
          </div>
          <div className="skill-bar">
            <span className="skill-label">C++</span>
            <span className="skill-value">{productivity.cpp.toFixed(1)}%</span>
            <div className="bar-bg">
              <div className="bar-fill cpp" style={{width: `${productivity.cpp}%`}}></div>
            </div>
          </div>
          <div className="skill-bar skill-note">
            * If Bjarne Stroustrup — the creator of C++ — rates himself a 7/10 in C++, I'm not sure I have any business claiming anything higher.
          </div>
        </div>
        <div className="coffee-slider-section coffee">
          <label htmlFor="coffee-slider">Number of cups of coffee I have had today: <b>{coffee}</b></label>
          <input
            id="coffee-slider"
            type="range"
            min="1"
            max="10"
            value={coffee}
            onChange={handleCoffeeSlider}
            className="coffee-slider"
          />
        </div>
        <div className="coffee-slider-section imposter">
          <label htmlFor="imposter-slider">Imposter syndrome slider: <b>{imposter.toFixed(1)}%</b></label>
          <input
            id="imposter-slider"
            type="range"
            min="0"
            max="100"
            step="0.5"
            value={imposter}
            onChange={handleImposterSlider}
            className="coffee-slider"
          />
        </div>
      </div>
    </div>
  );
}
