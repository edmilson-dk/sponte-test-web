import { Dispatch, ReactNode, SetStateAction } from "react";

export type CustomThemeContextProps = {
  toggleTheme: () => void;
}

export type CustomThemeContextProviderProps = {
  children: ReactNode;
  theme: any;
  setTheme: Dispatch<SetStateAction<any>>;
}