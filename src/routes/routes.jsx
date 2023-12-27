import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import CreateBlogPage from "./../pages/CreateBlogPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/students",
        element: <div>Student Page</div>,
      },
      {
        path: "/create-blog",
        element: <CreateBlogPage />,
      },
      {
        path: "/accounts",
        element: <div>Account Page</div>,
      },
      {
        path: "/address",
        element: <div>Address Page</div>,
      },
      {
        path: "/documentation",
        element: <div>Documentation Page</div>,
      },
      {
        path: "/branch",
        element: <div>Branch Page</div>,
      },
      {
        path: "/video-course",
        element: <div>Video Course Page</div>,
      },
      {
        path: "/tuition-fee",
        element: <div>Tuition fee Page</div>,
      },
      {
        path: "/update-session",
        element: <div>Update Session Page</div>,
      },
    ],
  },
]);

export default routes;
