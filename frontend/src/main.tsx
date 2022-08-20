import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles.css";

const root = document.getElementById("root");
if (root === null) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
