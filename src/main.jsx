import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import ThemeProvider from "./contexts/ThemeContext/ThemeProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
