import { createRoot } from "react-dom/client";
import React from "react";
import { App } from "./App.jsx";
import "./css/output.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
