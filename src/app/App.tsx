import React from "react";

import { useTheme } from "app/providers/ThemeProvider";

import "./styles/index.scss";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
}
