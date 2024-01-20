import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInterceptor from '../axios/axiosInterceptor';
import PlaylistFrom from '../component/PlaylistFrom';
import PlayList from "../component/Playlist.jsx"
import { useVideoContext } from '../context/VideoContext.jsx';
import YouTubeSingleVideo from '../component/YouTubeSingleVideo.jsx';
const PlayListAdd = () => {
    const [posts, setPosts] = useState([]);
    const { selectedVideoId } = useVideoContext();
    const api = axiosInterceptor();
    useEffect(() => {
        fetchUserPosts();
    }, []);
    const fetchUserPosts = async () => {
        try {
            const response = await api.get("/video-playlist");
            setPosts(response.data.video);
        } catch (err) {
            console.log(err);
        }
    };
    const handleDelete = async (carouselId) => {
        try {
            await api.delete(`/blog/${carouselId}`);
            fetchUserPosts();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <PlaylistFrom />
            <br/>
            <div className="" style={{marginTop:"auto"}}>
      <div className="row">
        <div className="col-md-4">
          {/* Left Column: Video */}
          {selectedVideoId && <YouTubeSingleVideo videoId={selectedVideoId} />}
        </div>
        <div className="col-md-7" style={{margin:"0px, auto",textAlignLast:"end"}}>
          {/* Right Column: Playlist */}
          {posts.map((item, index) => (
            <div key={index} className="">
              <PlayList data={item} handleDelete={() => handleDelete(item._id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
    );
};

export default PlayListAdd;