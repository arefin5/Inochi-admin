// routes.jsx
import { createBrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import App from '../App';
import HomePage from '../pages/HomePage';
import CreateBlogPage from '../pages/CreateBlogPage';
import AdminPanel from '../pages/AdminPanel'; // Assuming you have an AdminPanel component
import LoginComponent from "../components/LoginComponent"

// Higher-order component for private routes
const PrivateRoute = ({ element }) => {
  const { state } = useAuth();

  return state.isAuthenticated ? element : <Navigate to="/login" replace />;
};

const routesConfig = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/students',
        element: <PrivateRoute element={<div>Student Page</div>} />,
      },
      {
        path: '/create-blog',
        element: <PrivateRoute element={<CreateBlogPage />} />,
      },
      {
        path: '/accounts',
        element: <PrivateRoute element={<div>Account Page</div>} />,
      },
      // ... other routes
    ],
  },
  {
    path: '/login',
    element: <LoginComponent />,
  },
];

const routes = createBrowserRouter(routesConfig);

export default routes;
