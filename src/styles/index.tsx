import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryLight: "#45baf9",
    primary: "#3292d6",
    blueDark: "#091a7a",
    dark: "#0D2534",
    greenDark: "#2DA537",
    greenLight: "#3ec13e",
    danger: "#db261f",
    warning: "#FFC10A",
    white: "#fff",
    whiteSecond: "rgba(244, 244, 244, 0.8)",
    gray200: "#AFB2B1",
    gray500: "#808080",
    gray800: "#494D4B",
  },
  utility: {
    radius: "5px",
  }
}

export const colorsSwitch = {
  created: theme.colors.greenLight,
  updated: theme.colors.primaryLight,
  deleted: theme.colors.danger
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