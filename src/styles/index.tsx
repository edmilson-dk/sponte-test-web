import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryLight: "#0198DB",
  primary: "#0172B7",
  greenDark: "#2DA537",
  greenLight: "#3EC13E",
  danger: "#DB261F",
  warning: "#FFC10A",
  bgPrimary: "#fff",
  bgSecond: "rgba(244, 244, 244, 0.8)",
  radius: "5px",
}

type CustomThemeProviderProps = {
  children: ReactNode;
}

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}