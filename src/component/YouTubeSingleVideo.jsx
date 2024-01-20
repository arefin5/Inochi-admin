import React from 'react';
import YouTube from 'react-youtube';

const YouTubeSingleVideo = ({videoId}) => {
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 1,
      showinfo: 0,
      rel: 0,
    },
  };

  const onReady = (event) => {
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default YouTubeSingleVideo;
