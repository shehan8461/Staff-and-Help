import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css'; // Custom CSS file for styling
import homepageImage from './images/homepage-image.jpg'; // Corrected import

function Home() {
  return (
    <div className="home-container">
      <div className="home-image">
        <img src={homepageImage} alt="Shopping Buddy" />
      </div>
      <div className="home-content">
        <h1>Welcome to Shopping Buddy</h1>
        <p>Your ultimate companion for a seamless shopping experience. Manage staff efficiently and leverage voice commands to optimize your tasks.</p>
        <div className="home-buttons">
          <Link to="/manager-sign-in" className="home-btn manage-staff-btn">Manage Staff</Link>
          <Link to="/" className="home-btn voice-command-btn">Enter Voice Commands</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;