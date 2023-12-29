import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { useMemo } from "react";
import useSettings from "../hooks/useSettings";
import palette from "./palette";
import shadows from "./shadows";
import customShadows from "./customShadows";
import breakpoints from "./breakpoints";
import typography from "./typography";

const ThemeProvider = ({ children }) => {
  const { themeMode } = useSettings();
  const isLight = themeMode === "light";

  const themeOptions = useMemo(() => ({
    palette: isLight ? palette.light : palette.dark,
    typography,
    breakpoints,
    shape: { borderRadius: 8 },
    // direction: themeDirection,
    shadows: isLight ? shadows.light : shadows.dark,
    customShadows: isLight ? customShadows.light : customShadows.dark,
  }));

  const theme = createTheme(themeOptions);
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
