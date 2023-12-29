// routes.jsx
import { createBrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import App from '../App';
import HomePage from '../pages/HomePage';
import CreateBlogPage from '../pages/CreateBlogPage';
import AdminPanel from '../pages/AdminPanel'; // Assuming you have an AdminPanel component
import LoginComponent from "../components/LoginComponent"
import StudentList from '../pages/StudentList';
import Documen from '../pages/Documen';
import DocumentList from '../pages/DocumentList';
import TeamCreate from '../pages/TeamCreate';
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
        path:"/team-create",
        element: <PrivateRoute element={<TeamCreate />} />,

      },
      {
        path: '/students',
        element: <PrivateRoute element={<StudentList />} />,
      },
      {
        path: '/create-blog',
        element: <PrivateRoute element={<CreateBlogPage />} />,
      },
      {
        path: '/accounts',
        element: <PrivateRoute element={<div>Account Page</div>} />,
      },
      {
        path: '/documentation',
        element: <PrivateRoute element={<Documen/>} />,
      },
      // ... other routes
    ],
  },
  {
    path: '/login',
    element: <LoginComponent />,
  },{
    path:'/documentlist',
    element: <DocumentList />
  },
];

const routes = createBrowserRouter(routesConfig);

export default routes;
