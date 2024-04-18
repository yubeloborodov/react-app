import React from "react";

import { classNames } from "shared/lib/classNames";
import cls from "./NavBar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ThemeSwitcher";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.navbar)}>
      <ThemeSwitcher />
      <div className={classNames(cls.navbar_links)}>
        <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.navbar_link, {})} to={"/"}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.navbar_link, {})} to={"/about"}>О сайте</AppLink>
      </div>
    </div>
  );
};
