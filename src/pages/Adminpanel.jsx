// AdminPanel.js
import React, { useEffect, useState } from 'react';
import axiosInterceptor from '../axios/axiosInterceptor';
import { Outlet } from "react-router-dom";
import SideBar  from "../components/SideBar";
const AdminPanel = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const api = axiosInterceptor();

  useEffect(() => {
    // Fetch current user information
    api.get('/profile')
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching current user:', error);
      });
      api.get("/review").then((response)=>{
        console.log(response.data)
      });
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      {currentUser ? (
        <div className="d-flex">
      <SideBar />
      <div className="w-75">
        <Outlet />
      </div>
    </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AdminPanel;
