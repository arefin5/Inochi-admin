import React, { useState } from 'react';
import PlaylistVideos from "./CreatePlaylis";

const Playlist = ({ handleDelete, data }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <>
      <div className="">
        <div className="">
          <div className="">
            <div className="card-body text-center">
              <h4>{data.title}</h4>
              <button className='btn btn-primary' onClick={toggleContentVisibility}>
                {isContentVisible ? 'Hide Class' : 'Show full Class'}
              </button>
              {isContentVisible && (
                <>
                  <PlaylistVideos Id={data.playlistTitle} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playlist;
