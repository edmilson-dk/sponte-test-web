import { createContext, useContext } from "react";

import { darkTheme, lightTheme } from "src/styles";
import { CustomThemeContextProps, CustomThemeContextProviderProps } from "./types";

export const CustomThemeContext = createContext({} as CustomThemeContextProps);

export function CustomThemeContextProvider({ children, theme, setTheme }: CustomThemeContextProviderProps) {
  function toggleTheme() {
    setTheme(theme.title === "dark" 
      ? lightTheme
      : darkTheme
    );
  }

  return (
    <CustomThemeContext.Provider value={{ toggleTheme }}>
      { children }
    </CustomThemeContext.Provider>
  );
}

export function useCustomThemeContext() {
  const context = useContext(CustomThemeContext);
  return context;
}