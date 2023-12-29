import { createContext, useState } from "react";

const initialState = {
  themeMode: "light",
  onToggleMode: () => {},
};

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(initialState);
  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };
  return (
    <SettingsContext.Provider value={{ ...settings, onToggleMode }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
