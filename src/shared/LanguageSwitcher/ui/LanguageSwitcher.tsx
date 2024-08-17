import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

import cls from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.LanguageSwitcher, {}, [className])}
      onClick={toggle}
    >
      {t("Язык")}
    </Button>
  );
};
