import {
  createTheme,
  CssBaseline,
  PaletteMode,
  Switch,
  ThemeProvider,
} from "@mui/material";
import { amber, grey } from "@mui/material/colors";
import { useContext, useMemo } from "react";
import "./App.css";
import CustomToolbar from "./components/CustomToolbar";
import Home from "./components/Pages/Home";
import AppContext from "./contexts/AppContext";

import styles from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import CountryService from "./services/CountryService";
import CountryDetail from "./components/Pages/CountryDetail";

const getDesignToken = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            light: "#ffffff",
            main: "#ffffff",
            dark: "#fafafa",
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          primary: {
            light: "#2b3743",
            main: "#2b3743",
            dark: "#202d36",
          },
          text: {
            primary: "#ffffff",
            secondary: "#ffffff",
          },
        }),
  },
});

const App = () => {
  const { colorMode } = useContext(AppContext);

  const theme = useMemo(
    () => createTheme(getDesignToken(colorMode)),
    [colorMode]
  );

  // Fix problem
  const allCountries = CountryService.useAll();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <CustomToolbar />
      <div
        style={{ backgroundColor: theme.palette.primary.dark }}
        className={styles.body}
      >
        <Routes>
          <Route path="/" element={<Home countryList={allCountries} />} />
          <Route path="/home" element={<Home countryList={allCountries} />} />
          <Route
            path="/country/:name"
            element={<CountryDetail countryList={allCountries} />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
