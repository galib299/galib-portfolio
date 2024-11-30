import React from 'react';

const MusicSection = () => {
  return (
    <section id="music-videos" className="music-videos">
      <h2>Music</h2>
      <div className="video-gallery">
        <div className="video-item">
          <iframe src="your-video-url" title="Music Video 1"></iframe>
          <h3>Video</h3>
        </div>
        <div className="video-item">
          <iframe src="your-video-url" title="Music Video 2"></iframe>
          <h3>Video</h3>
        </div>
        <div className="video-item">
          <iframe src="your-video-url" title="Music Video 3"></iframe>
          <h3>Video</h3>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
