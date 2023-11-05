import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Route/Route";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./pages/Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
