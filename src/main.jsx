import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./index.css";

import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Upload from "./pages/upload/Upload";
import Profile from "./pages/profile/Profile";
import Reel from "./pages/reel/Reel";
import Notification from "./pages/notifcation/Notification";
import Message from "./pages/message/Message";
import Signup from "./pages/signup/Signup";
import App from "./pages/app/App";

import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Signup /> },

  {
    path: "/layout",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "app", element: <App /> },
      { path: "about", element: <About /> },
      { path: "reel", element: <Reel /> },
      { path: "upload", element: <Upload /> },
      { path: "profile", element: <Profile /> },
      { path: "message", element: <Message /> },
      { path: "notification", element: <Notification /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
