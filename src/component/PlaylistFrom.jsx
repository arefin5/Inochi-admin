import React, { useState } from 'react';
import axios from 'axios';
import axiosInterceptor from '../axios/axiosInterceptor';
const PlaylistFrom = () => {
    const [playlistTitle, setPlaylistTitle] = useState('');
    const [title,setTitle]=useState('');
    const api=axiosInterceptor()
const handleCreatePlaylist=async(e)=>{
    e.preventDefault();
    const { data } = await api.post("/add-video", {
        playlistTitle,
        title
    });
}
    return (
        <div>
            <h2>Add  YouTube Playlists</h2>
            <input
                type="text"
                placeholder="Enter playlist"
                value={playlistTitle}
                onChange={(e) => setPlaylistTitle(e.target.value)}
            />
             <input
                type="text"
                placeholder="Enter playlist title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleCreatePlaylist}>Add Playlists</button>
        </div>
    );
};

export default PlaylistFrom;