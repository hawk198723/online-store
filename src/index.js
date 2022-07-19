import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "reportWebVitals";
import "css/app.scss";
import "css/style.scss";
import Router from "Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "commonFunctions/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Router />
  </div>
);

reportWebVitals();
