"use client";

import { useTheme } from "next-themes";

const SwitchThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const onClick = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <>
      <button
        className="h-4/6 p-2 self-center border rounded-2xl border-slate-500"
        onClick={onClick}
      >
        <p className="text-primary-font-color">Switch Theme</p>
      </button>
    </>
  );
};

export { SwitchThemeButton };
