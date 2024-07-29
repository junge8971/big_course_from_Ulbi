import { createContext } from 'react';

export enum Theme {
  dark = 'app_dark_theme',
  light = 'app_light_theme',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
