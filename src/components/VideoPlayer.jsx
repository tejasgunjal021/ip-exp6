import React from 'react';
import './videoplayer.css';
import video from '../assets/clgvideo.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`}>
      <video 
        src={video} 
        muted 
        controls 
        onEnded={() => setPlayState(false)} // Reset playState when video ends
      />
      <button 
        className="close-button" 
        onClick={() => setPlayState(false)} // Close the video when clicked
      >
        Close
      </button>
    </div>
  );
}

export default VideoPlayer;
