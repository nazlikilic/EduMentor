import "./VideoPlayer.css"
import React, { useRef } from 'react';

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);

  const playPauseHandler = () => {
    const video = videoRef.current;
    video.paused ? video.play() : video.pause();
  };

  const muteUnmuteHandler = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
  };

  return (
    <div className="video-player">
      <video ref={videoRef} controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="controls">
        <button onClick={playPauseHandler}>Oynat/Duraklat</button>
        <button onClick={muteUnmuteHandler}>Sesi Aç/Kapat</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
