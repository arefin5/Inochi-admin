// VideoContext.js
import { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export const useVideoContext = () => {
  return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const setVideoId = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
    <VideoContext.Provider value={{ selectedVideoId, setVideoId }}>
      {children}
    </VideoContext.Provider>
  );
};
