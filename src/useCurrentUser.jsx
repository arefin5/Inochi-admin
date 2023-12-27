// useCurrentUser.js
import { useEffect, useState } from 'react';
import axiosInterceptor from './axios/axiosInterceptor';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; // Adjust the path accordingly

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const api = axiosInterceptor();
  const navigate = useNavigate();
  const { state } = useAuth(); // Get the authentication state from your context
// console.log("state",state.user)
  useEffect(() => {
    const fetchCurrentUser = async () => {
      // Check if the user is authenticated
      // console.log(state)
      if ( state && state.isAuthenticated && state.user.role=="admin") {
        try {
          const { data } = await api.get('/profile');
          setCurrentUser(data);
        } catch (error) {
          navigate('/login');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false); // User not authenticated, set loading to false
      }
    };

    const timeoutId = setTimeout(() => {
      navigate('/login');
    }, 10000); // Adjust the timeout duration as needed

    fetchCurrentUser();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [api, navigate, state.isAuthenticated]);

  return { currentUser, loading };
};

export default useCurrentUser;