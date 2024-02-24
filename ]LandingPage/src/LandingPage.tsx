import React from 'react';
import './LandingPage.css';
import Logo from './Logo.png';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="navbar">
        <div className="navigation-bar">
          <div id="navigation-container">
            <img src={Logo} alt='Logo' />
            <div className="search-container">
              <div className="search-input">
                <div className="search-text">
                  <div className="search-text-content">Search..</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container">
        <h1>Elevate your project development</h1>
        <h1>with<span style={{color: 'blue'}}>Easy to use</span></h1>
        <p>
          Don't waste any more time struggling with UI coding. Try out our library and 
        </p>
        <p>
          experience the power of fast, effective development for yourself.
        </p>
        <div className="explore-button">
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
