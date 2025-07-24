// index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

// Pages
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
import AppPage from "./pages/app/App"; // renamed to avoid conflict
import PrivateRoute from "./pages/protected/protectedrout";

// Router
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
      { path: "app", element: <AppPage /> },
      { path: "about", element: <About /> },
      { path: "upload", element: <Upload /> },
      { path: "profile", element: <Profile /> },
      { path: "reel", element: <Reel /> },
      { path: "message", element: <Message /> },
      { path: "notification", element: <Notification /> },
    ],
  },
]);

// Render
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
