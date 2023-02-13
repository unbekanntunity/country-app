import { createContext } from "react";

export type ColorMode = "light" | "dark";

interface IAppContext {
  colorMode: ColorMode;
  setColorMode: (value: ColorMode) => void;
  toggleColorMode: () => void;
}

const defaultValues: IAppContext = {
  colorMode: "light",
  setColorMode: () => {
    /* no-op */
  },
  toggleColorMode: () => {
    /* no-op */
  },
};

export default createContext(defaultValues);
