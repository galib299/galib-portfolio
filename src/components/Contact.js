import React from 'react';

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
