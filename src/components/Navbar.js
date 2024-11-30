import React from 'react';
import { Link } from 'react-scroll'; 

const Navbar = () => {
  return (
    <div className="nav-bar">
      <ul>
        <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
        <li><Link to="hobbies" smooth={true} duration={1000}>Hobbies</Link></li>
        <li><Link to="programming" smooth={true} duration={1000}>Programming</Link></li>
        <li><Link to="street-photographer" smooth={true} duration={1000}>Street Photography</Link></li>
        <li><Link to="music-videos" smooth={true} duration={1000}>Music</Link></li>
        <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
