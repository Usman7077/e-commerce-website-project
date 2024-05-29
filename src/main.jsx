import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { RouterProvider } from "react-router-dom";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <RouterProvider router={appRouter} />
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
