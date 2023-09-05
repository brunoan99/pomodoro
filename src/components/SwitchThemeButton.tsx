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
        className="bg-[#fff] h-4/6 p-2 self-center border rounded-2xl"
        onClick={onClick}
      >
        <p className="text-[#000]">Switch Theme</p>
      </button>
    </>
  );
};

export { SwitchThemeButton };
