// App.jsx
import React, { useEffect, useState } from 'react';
import axiosInterceptor from './axios/axiosInterceptor';
import { Outlet, useNavigate } from 'react-router-dom';
// App.jsx
import SideBar from "./components/SideBar";

import useCurrentUser from './useCurrentUser';

const App = () => {
  const { currentUser, loading } = useCurrentUser();

  return (
    <div>
      <h1>Admin Panel</h1>
      {loading ? (
        <p>Loading...</p>
      ) : currentUser ? (
        <div className="d-flex">
        <SideBar />

          <div className="w-75">
            <Outlet />
          </div>
        </div>
      ) : (
        <p>Failed to fetch Admin information. Redirecting to login...</p>
      )}
    </div>
  );
};

export default App;
