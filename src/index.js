import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "reportWebVitals";
import "css/app.scss";
import "css/style.scss";
import Router from "Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();
