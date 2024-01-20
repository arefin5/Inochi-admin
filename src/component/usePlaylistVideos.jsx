import { useState, useEffect } from 'react';
import axios from 'axios';

const usePlaylistVideos = (playlistId, apiKey) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}`
        );

        const fetchedVideos = response.data.items.map((item) => ({
          title: item.snippet.title,
          videoId: item.snippet.resourceId.videoId,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));

        setVideos(fetchedVideos);
      } catch (error) {
        setError(error);
      }
    };

    fetchPlaylistVideos();
  }, [playlistId, apiKey]);

  return { videos, error };
};

export default usePlaylistVideos;
