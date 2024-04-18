import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared/lib/classNames";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

import cls from "./ThemeSwitcher.module.scss";

import LightIcon from 'shared/assets/icons/apple_fill.svg';
import DarkIcon from 'shared/assets/icons/apple_line.svg';
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({
  className,
}: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon />}
      Toggle Theme
    </Button>
    // <button
    //   className={classNames(cls.themeSwitcher, {}, [className])}
    //   onClick={toggleTheme}
    // >

    // </button>
  );
};
