import React, { useState } from 'react';
import Slider from '../components/UI/Slider';

export default function About() {
  const [coffee, setCoffee] = useState(1);
  const [wizardry, setWizardry] = useState(0);
  const [productivity, setProductivity] = useState({
    js: 30,
    python: 55,
    pyspark: 40,
    ml: 30,
    fullstack: 60,
    cpp: 30,
  });

  function randomProductivity() {
    return {
      fullstack: Math.floor(Math.random() * 51) + 10, // 10-60
      python: Math.floor(Math.random() * 51) + 10,
      pyspark: Math.floor(Math.random() * 51) + 10,
      ml: Math.floor(Math.random() * 51) + 10,
      js: Math.floor(Math.random() * 51) + 10,
      cpp: Math.floor(Math.random() * 51) + 10,
    };
  }

  function updateProductivity(coffeeValue: number, wizardryValue: number) {
    // Preset: coffee=1, wizardry=0
    if (coffeeValue === 1 && wizardryValue === 0) {
      setProductivity({
        js: 30,
        python: 55,
        pyspark: 40,
        ml: 30,
        fullstack: 60,
        cpp: 30,
      });
      return;
    }
    // Preset: coffee=1, wizardry=100
    if (coffeeValue === 1 && wizardryValue === 100) {
      setProductivity({
        js: 45,
        python: 40,
        pyspark: 35,
        ml: 35,
        fullstack: 55,
        cpp: 30,
      });
      return;
    }
    // Otherwise, set random values
    setProductivity(randomProductivity());
  }

  function handleCoffeeSlider(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value, 10);
    setCoffee(value);
    updateProductivity(value, wizardry);
  }

  function handleWizardrySlider(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(e.target.value);
    setWizardry(value);
    updateProductivity(coffee, value);
  }

  return (
    <div className="page-content">
      <div className="about-two-col">
        <div className="about-left">
          <h2 className="about-title">What I Do?</h2>
          <p className="about-desc">
             I am very curious and a very quick learner. Sometimes I get so excited about a new idea that I just have to try it out.
            <br /><br />
            Currently, I'm studying Computer Science at&nbsp;
          <strong className="extra-bold">
              <a
                href="https://engineering.nyu.edu/about/assessment-and-institutional-research/abet-graduation-retention-and-enrollment#graduation-rates"
                target="_blank"
                rel="noopener noreferrer"
              >
                NYU Tandon School of Engineering
              </a>
          </strong>
          , where I will be graduating in May of 2026. (That's on time—which which is a miracle. Classes are hard + we get no vacation. Only half of my class is graduating on time—
          <a
            href="https://engineering.nyu.edu/about/assessment-and-institutional-research/abet-graduation-retention-and-enrollment#graduation-rates"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 400 }}
          >
            literally
          </a>
          .)
            <br /><br />
            I hold a couple of certificates I am proud of:&nbsp;
            <strong><a href="https://fullstackopen.com/en/" target="_blank" rel="noopener noreferrer">Full Stack Web Development Certificate (University of Helsinki)</a></strong> 
             &nbsp;and&nbsp;
            <strong><a href="https://engineering.nyu.edu/life-tandon/tandon-career-hub/resources-students/data-science-bootcamp" target="_blank" rel="noopener noreferrer">Data Science Bootcamp Certificate (NYU Tandon)</a></strong>.
            Both of them were pretty tough, but we did it 🥳.
            <br /><br />
          </p>
        </div>
        <div className="about-right">
          <div className="skills-section">
            <div className="skill-bar">
              <span className="skill-label">Full Stack Web Development</span>
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
              <br></br>
              * I'm optimal at 1 cup of coffee and 100% wizardry.
            </div>
          </div>
          <div className="sliders-section">
            <Slider
              id="coffee-slider"
              label={`Number of cups of coffee I have had today: ${coffee}`}
              min={1}
              max={10}
              value={coffee}
              onChange={handleCoffeeSlider}
              className="coffee-slider"
            />
            <Slider
              id="wizardry-slider"
              label={`Wizardry Level: ${wizardry.toFixed(1)}%`}
              min={0}
              max={100}
              step={0.5}
              value={wizardry}
              onChange={handleWizardrySlider}
              className="wizardry-slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
