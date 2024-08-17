// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//import App from "./App.jsx";
import "./index.css";

import ErrorPage from "./Pages/Error_Page/error-page.jsx";
import Home from "./Pages/Home/Home.jsx";
import Landing from "./Landing.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Download from "./Pages/Download/Download.jsx";
import KnowHow from "./Pages/KnowHow/KnowHow.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />}>
        <Route index path="" element={<Home />} />
        <Route index path="/download" element={<Download />} />
        <Route index path="/knowhow" element={<KnowHow />} />
        <Route index path="/aboutus" element={<About />} />
        <Route index path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </>
  )
);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
