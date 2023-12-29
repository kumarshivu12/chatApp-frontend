import React from "react";
import useSettings from "./hooks/useSettings";
import useResponsive from "./hooks/useResponsive";
import ThemeProvider from "./theme";

const App = () => {
  const { themeMode, onToggleMode } = useSettings();
  const a = useResponsive("down", "md");

  return (
    <ThemeProvider>
      <button
        onClick={() => {
          onToggleMode();
        }}
      >
        {themeMode}
      </button>
    </ThemeProvider>
  );
};

export default App;
