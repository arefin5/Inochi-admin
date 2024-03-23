import React, { useEffect, useState } from 'react';
import CreateCaruselTop from '../component/CreateCaruselTop.jsx';
import CreateServiceTop from '../component/CreateService.jsx';
import CaruselPending from '../component/pendingCarusel.jsx';
import axiosInterceptor from '../axios/axiosInterceptor.js';
import PendingBlogs from "../component/PendingBlogs.jsx"
const CreateService = () => {
  const [caruselData, setCaruselData] = useState([]);
const api =axiosInterceptor();
  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {
    try {
      const response = await api.get("/pending-blogs");
      // console.log(response.data.pendingBlogs)
      setCaruselData(response.data.pendingBlogs);
    } catch (err) {
      console.log(err);
    }
  };
  // 
  const handleDelete = async (carouselId) => {
    try {
      // Make a request to delete the carousel with the specified ID
      await api.delete(`/blog/${carouselId}`);
      // Refresh the carousel data after deletion
      fetchUserPosts();
    } catch (err) {
      console.log(err);
    }
  };

  
  const handleApprove = async (carouselId) => {
    try {
      await api.put(`/aproved-carusel/${carouselId}`);
      // Refresh the carousel data after approval
      fetchUserPosts();
    } catch (err) {
      console.log(err);
    }
  };
const handleEdit=async(carouselId)=>{
  try {
    // Make a request to approve the carousel with the specified ID
    await api.put(`/-carusel/${carouselId}`);
    // Refresh the carousel data after approval
    fetchUserPosts();
  } catch (err) {
    console.log(err);
  }
}
  return (
    <div>
      <h1 className="text-center">Create Service</h1>
      <hr />
      <CreateServiceTop />
      <div className="row">
      {
        caruselData ? (
            caruselData.map((item, index) => (
                <div key={index} className='col-md-4'>
                <PendingBlogs
                data={item}
                handleApprove={() => handleApprove(item._id)}
                handleDelete={() => handleDelete(item._id)}
              />
                </div>
            ))
        ):
            <>
            </>
        
      }
      </div>
    </div>
  );
};

export default CreateService;
