"use client"
import React, { useEffect, useState } from 'react';
import CreateCaruselTop from '../component/CreateCaruselTop';
import CaruselPending from '../component/pendingCarusel.jsx';
import axiosInterceptor from '../axios/axiosInterceptor.js';
const CreateCarusel = () => {
  const [caruselData, setCaruselData] = useState([]);
const api =axiosInterceptor();
  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {
    try {
      const response = await api.get("/draft-carusel");
      setCaruselData(response.data.AllpendingCarusel);
      console.log(response.data.AllpendingCarusel); // Log the fetched data
    } catch (err) {
      console.log(err);
    }
  };
  // 
  const handleDelete = async (carouselId) => {
    try {
      // Make a request to delete the carousel with the specified ID
      await api.delete(`/delete-carusel/${carouselId}`);
      // Refresh the carousel data after deletion
      fetchUserPosts();
    } catch (err) {
      console.log(err);
    }
  };

  
  const handleApprove = async (carouselId) => {
    try {
      // Make a request to approve the carousel with the specified ID
      await api.put(`/aproved-carusel/${carouselId}`);
      // Refresh the carousel data after approval
      fetchUserPosts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-center">Carusel Data</h1>
      <hr />
      <CreateCaruselTop />
      <div className="row">
      {
        caruselData ? (
            caruselData.map((item, index) => (
                <div key={index} className='col-md-4'>
                <CaruselPending
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

export default CreateCarusel;
