import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SettingsProvider from "./contexts/SettingsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </>
);
