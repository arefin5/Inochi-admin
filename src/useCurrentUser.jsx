
import { useEffect, useState } from 'react';
import axiosInterceptor from './axios/axiosInterceptor';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const api = axiosInterceptor();
  const navigate = useNavigate();
  const { state } = useAuth();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (state && state.isAuthenticated && state.user.role === "admin") {
        try {
          const { data } = await api.get('/profile');
          setCurrentUser(data);
        } catch (error) {
          navigate('/login');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    if (state.isAuthenticated) {
      fetchCurrentUser();
    } else {
      navigate('/login');
    }
  }, [api, navigate, state]);

  return { currentUser, loading };
};

export default useCurrentUser;
