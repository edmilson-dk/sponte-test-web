import { Dispatch, SetStateAction, useEffect, useState } from "react";

type UseCustomThemeResponse<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];  

export function useCustomTheme<T>(key: string, initalThemeState: T): UseCustomThemeResponse<T> {
  const [ state, setState ] = useState(initalThemeState);

  useEffect(() => {
    let storagedTheme = null;
    if (typeof window !== undefined) storagedTheme = localStorage.getItem(key);
    
    storagedTheme 
    ? setState(JSON.parse(storagedTheme))
    : setState(initalThemeState);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [ state, setState ];
}