import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.scss'
import Herobtn1 from '../ui/Herobtn1';
import Herobtn2 from '../ui/Herobtn2';

const Hero =() => {
  
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row hero-row">
          <div className="col-lg-6 col-sm-12 hero-content">
            <h1 className="hero-title">
              Building apps just got easier
            </h1>
            <p className="hero-description">
              Aliquam vel platea curabitur sit vestibulum egestas sit id lorem. Aliquet neque, dui sed eget scelerisque.
              Non at at venenatis tortor amet feugiat ullamcorper in. Odio vulputate cras vel lacinia turpis volutpat
              adipiscing. Sollicitudin at velit, blandit tempus nunc in.
            </p>
            <div className="hero-buttons">
              <Herobtn1/>
              {/* <a href="#" className="btn-get-started">Get Started</a> */}
              <Herobtn2/>
              {/* <a href="#" className="btn-watch-video">
                <span className="video-icon">
                  <img src="src/assets/icons/play-icon.svg" alt="Play Icon" />
                </span>
                Watch Video
              </a> */}
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 hero-image">
            <img src="src/assets/images/main-img.png" alt="Hero Image" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
