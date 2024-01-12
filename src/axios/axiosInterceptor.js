// axiosInterceptor.js
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const axiosInterceptor = () => {
  const { state, logout } = useAuth();
  const { navigate } = useNavigate();

  const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
  });

  instance.interceptors.request.use(
    (config) => {
      if (state.isAuthenticated) {
        config.headers.Authorization = `Bearer ${state.token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Unauthorized, log out user and redirect to login page
        logout();
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default axiosInterceptor;
