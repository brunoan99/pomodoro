"use client";

import { PropsWithChildren, createContext, useCallback, useState } from "react";

type theme = "light" | "dark";

type ThemeContextType = {
  theme: theme
  switchTheme: () => void
}

const defaultContext: ThemeContextType = {
  theme: "light",
  switchTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<theme>("light");

  const switchTheme = useCallback(() => {
    const nextTheme = theme == "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    setTheme(nextTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export type { ThemeContextType }
export { ThemeContext, ThemeProvider }
