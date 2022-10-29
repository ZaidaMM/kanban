import { createContext } from 'react';

export interface IThemeModeContext {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  dark: string;
  light: string;
  handleToggleTheme: () => void;
}

export const ThemeModeContext = createContext<IThemeModeContext | undefined>(
  undefined
);
