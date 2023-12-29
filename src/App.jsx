import React from "react";
import useSettings from "./hooks/useSettings";
import ThemeProvider from "./theme";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const { themeMode, onToggleMode } = useSettings();

  return (
    <ThemeProvider>
      {/* <button
        onClick={() => {
          onToggleMode();
        }}
      >
        {themeMode}
      </button> */}
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;
