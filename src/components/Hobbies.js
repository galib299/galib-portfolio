import React from 'react';
import { FaLaptopCode, FaCamera, FaMusic, FaChess } from 'react-icons/fa'; 

const HobbiesSection = () => {
  return (
    <section id="hobbies" className="hobbies-section">
      <h2>My Hobbies</h2>
      <div className="hobbies-grid">
        <div className="hobby-item">
          <FaLaptopCode className="icon" />
          <h3>Programming</h3>
          <p>Frontend, Backend, Python - I love creating things from code.</p>
        </div>
        <div className="hobby-item">
          <FaCamera className="icon" />
          <h3>Photography</h3>
          <p>Capturing moments with my camera, from street photography to portraits.</p>
        </div>
        <div className="hobby-item">
          <FaMusic className="icon" />
          <h3>Piano & Guitar</h3>
          <p>From piano melodies to guitar riffs, music is a part of my soul.</p>
        </div>
        <div className="hobby-item">
          <FaChess className="icon" />
          <h3>Chess</h3>
          <p>Strategizing, thinking ahead, and improving my skills with each game.</p>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
