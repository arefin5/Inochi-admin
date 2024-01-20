import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes/routes.jsx";
import { AuthProvider } from './context/AuthContext.jsx';
import { VideoProvider } from './context/VideoContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProvider>
  <VideoProvider>
    <RouterProvider router={routes} />
    </VideoProvider>
    </AuthProvider>
  </React.StrictMode>
);
