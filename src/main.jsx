import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SettingsProvider from "./contexts/SettingsContext";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <HelmetProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </HelmetProvider>
  </>
);
