import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage.tsx";
import AboutPage from "./components/AboutPage.tsx";
import Profiles from "./components/Profiles.tsx";
import Profile from "./components/Profile.tsx";
import { UserProvider } from "./Context/user.tsx";
import PlayGround from "./components/PlayGround.tsx";
import App from "./App.tsx";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <HomePage />
      </UserProvider>
    ),
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/photos",
    element: <Profiles />,
  },
  {
    path: "/photo/:photoId",
    element: <Profile />,
  },
  {
    path: "/playground",
    element: <PlayGround />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
   </React.StrictMode>
);
