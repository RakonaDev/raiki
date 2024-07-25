import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ResponsiveContextProvider from "./context/Responsive.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ResponsiveContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ResponsiveContextProvider>
);
