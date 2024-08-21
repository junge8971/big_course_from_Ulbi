import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
    case Theme.dark:
      newTheme = Theme.light;
      break;
    case Theme.light:
      newTheme = Theme.orange;
      break;
    case Theme.orange:
      newTheme = Theme.dark;
      break;

    default:
      newTheme = Theme.light;
      break;
    }

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    document.body.className = newTheme;
  };

  return { theme: theme || Theme.light, toggleTheme };
};
