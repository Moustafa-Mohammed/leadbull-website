import React from 'react';

const VideoBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
    >
      <source src="./bg-video.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
