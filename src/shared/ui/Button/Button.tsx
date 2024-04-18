import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme  {
  CLEAR = "clear",
  SECONDARY = "secondary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  onClick,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(cls.themeSwitcher, {}, [className, cls[theme]])}
      {...otherProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
