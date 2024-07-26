import { Theme, useTheme } from 'app/Providers/ThemeProvider';
import { FC, memo } from 'react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherComponentProps {
  className?: string;
}

const ThemeSwitcherComponent: FC<ThemeSwitcherComponentProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.clear}
      className={classNames(cls.ThemeSwitcher, [className], {})}
      onClick={toggleTheme}
    >
      {theme === Theme.dark ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export const ThemeSwitcher = memo(ThemeSwitcherComponent);
