import React, { useState } from "react";
import AppContext, { ColorMode } from "./AppContext";

interface IAppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [colorMode, setColorMode] = useState<ColorMode>("light");

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <AppContext.Provider value={{ colorMode, setColorMode, toggleColorMode }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
