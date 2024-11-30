import React from 'react';
import './App.css'; 
import autmnImage from './assets/elmir.jpg'; 

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#street-photographer">Street Photography</a></li>
          <li><a href="#music-videos">Music</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <section id="home" className="hero" style={{ backgroundImage: `url(${autmnImage})` }}>
        <h1>Hi, I'm Galib</h1>
        <p>Innovator | Jazzman | Software Developer</p>
      </section>

      <section id="hobbies" className="hobbies-section">
        <h2>My Hobbies</h2>
        <div className="hobbies-grid">
          <div className="hobby-item">
            <i className="fas fa-laptop-code"></i>
            <h3>Programming</h3>
            <p>Frontend, Backend, Python - I love creating things from code.</p>
          </div>
          <div className="hobby-item">
            <i className="fas fa-camera"></i>
            <h3>Photography</h3>
            <p>Capturing moments with my camera, from street photography to portraits.</p>
          </div>
          <div className="hobby-item">
            <i className="fas fa-music"></i>
            <h3>Piano & Guitar</h3>
            <p>From piano melodies to guitar riffs, music is a part of my soul.</p>
          </div>
          <div className="hobby-item">
            <i className="fas fa-chess"></i>
            <h3>Chess</h3>
            <p>Strategizing, thinking ahead, and improving my skills with each game.</p>
          </div>
        </div>
      </section>

      <section id="street-photographer" className="street-photographer">
        <h2>Street Photography</h2>
        <div className="image-gallery">
          <div className="image-item" style={{ backgroundImage: 'url(/images/shabran.jpg)' }}>
            <div className="quote">"Capturing life's raw moments."</div>
          </div>
          <div className="image-item" style={{ backgroundImage: 'url(/images/elmir.jpg)' }}>
            <div className="quote">"Street photography is a way of life."</div>
          </div>
          <div className="image-item" style={{ backgroundImage: 'url(/images/autmn.jpg)' }}>
            <div className="quote">"The beauty of the unexpected."</div>
          </div>
          <div className="image-item" style={{ backgroundImage: 'url(/images/elmler.jpg)' }}>
            <div className="quote">"Frozen in time."</div>
          </div>
          <div className="image-item" style={{ backgroundImage: 'url(/images/thallasophia.jpg)' }}>
            <div className="quote">"Urban life captured in motion."</div>
          </div>
        </div>
        <p className="image-description">Check out my latest works captured in the streets. The spontaneous moments, raw emotions, and urban beauty captured through my lens.</p>
      </section>

      <section id="music-videos" className="music-videos">
        <h2>Music</h2>
        <div className="video-gallery">
          <div className="video-item">
            <iframe src="" title="Music Video 1"></iframe>
            <h3>Video</h3>
          </div>
          <div className="video-item">
            <iframe src="" title="Music Video 2"></iframe>
            <h3>Video</h3>
          </div>
          <div className="video-item">
            <iframe src="" title="Music Video 3"></iframe>
            <h3>Video</h3>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <div>
            <h3>Email</h3>
            <p><a href="mailto:abdullayevgalib0@gmail.com" style={{ color: 'yellow' }}>abdullayevgalib0@gmail.com</a></p>
          </div>
          <div>
            <h3>Instagram</h3>
            <p><a href="https://www.instagram.com/galib.abdv" style={{ color: 'yellow' }}>galib.abdv</a></p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>9999999999</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Galib Abdullayev | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
