import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ScrollSet from "./components/ScrollSet";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio">
      <ScrollSet>
        <App />
      </ScrollSet>
    </BrowserRouter>
  </React.StrictMode>
);
