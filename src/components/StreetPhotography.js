import React from 'react';

const StreetPhotography = () => {
  return (
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
  );
};

export default StreetPhotography;
