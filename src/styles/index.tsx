const colors = {
  primaryLight: "#45baf9",
  primary: "#3292d6",
  blueDark: "#146aa7",
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
}

const utility = {
  radius: "5px",
}

export const lightTheme = { 
  title: "light",
  colors: {
    bgPrimary: "#fff",
    bgSecond: "rgba(244, 244, 244, 0.8)",
    ...colors
  },
  utility
}

export const darkTheme = {
  title: "dark",
  colors: {
    bgPrimary: "#040d13",
    bgSecond: "#0d171f",
    ...colors,
    gray200: "#999e9c",
  },
  utility,
}

export const colorsSwitch = {
  created: colors.greenLight,
  updated: colors.primaryLight,
  deleted: colors.danger
}