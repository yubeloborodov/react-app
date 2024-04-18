import React, { FC } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from "../lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

// Провайдер нам необходим, чтобы иметь глобальеный доступ с любого компонента к темам
const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const defaultProps = React.useMemo(() => {
    return {
      theme: theme,
      setTheme: setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
