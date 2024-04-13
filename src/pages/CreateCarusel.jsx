
import React, { useEffect, useState } from 'react';
import CreateCaruselTop from '../component/CreateCaruselTop';
import CaruselPending from '../component/pendingCarusel.jsx';
import axiosInterceptor from '../axios/axiosInterceptor.js';

const CreateCarusel = () => {
  const [caruselData, setCaruselData] = useState([]);
  const api = axiosInterceptor();

  useEffect(() => {
    fetchUserPosts();
  }, []); // Removed caruselData from the dependency array

  const fetchUserPosts = async () => {
    try {
      const response = await api.get("/draft-carusel");
      console.log(response.data)
      setCaruselData(response.data.AllpendingCarusel);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (carouselId) => {
    try {
      await api.delete(`/delete-carusel/${carouselId}`);
      fetchUserPosts();
    } catch (err) {
      console.log(err);
    }
  };

  const handleApprove = async (carouselId) => {
    try {
      await api.put(`/aproved-carusel/${carouselId}`);
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
        {caruselData.map((item, index) => (
          <div key={index} className='col-md-4'>
            <CaruselPending
              data={item}
              handleApprove={() => handleApprove(item._id)}
              handleDelete={() => handleDelete(item._id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateCarusel;
