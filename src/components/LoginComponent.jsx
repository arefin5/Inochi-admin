
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axiosInterceptor from '../axios/axiosInterceptor';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const { login, state } = useAuth();
  const [phone, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const api = axiosInterceptor();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    console.log(phone,password)
    try {
      const { data } = await api.post('/login', {
        phone,
        password,
      });

      if (data.error) {
        setLoginError('Invalid username or Password');
      } else {
        const { token, user } = data;
        login(token, user);
        setLoginError(null);
        navigate('/');
      }
    } catch (error) {
      setLoginError('Login failed. Please try again later.');
    }
  };

  useEffect(() => {
    // Use the state from useAuth to determine authentication status
    if (state !== null && state.isAuthenticated) {
      navigate('/');
    }
  }, [state, navigate]);

  return (
    <div>
      <h1>Login</h1>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="phone"
          id="username"
          value={phone}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
