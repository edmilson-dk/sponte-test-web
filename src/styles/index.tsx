import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryLight: "#45BAF9",
    primary: "#3292D6",
    blueDark: "#091A7A",
    dark: "#0D2534",
    greenDark: "#2DA537",
    greenLight: "#3EC13E",
    danger: "#DB261F",
    warning: "#FFC10A",
    white: "#fff",
    whiteSecond: "rgba(244, 244, 244, 0.8)",
  },
  utility: {
    radius: "5px",
  }
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