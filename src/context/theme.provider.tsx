"use client";

import { GetLocalThemeUseCase, SetLocalThemeUseCase } from "@/@core/application/theme";
import { Registry, container } from "@/@core/infra/container-registry";
import { PropsWithChildren, createContext, useCallback, useEffect, useState } from "react";

type theme = "light" | "dark";

type ThemeContextType = {
  theme: theme
  switchTheme: (nextTheme?: theme) => void
}

const defaultContext: ThemeContextType = {
  theme: "light",
  switchTheme: (nextTheme?: theme) => {},
};

const getNextTheme = (theme: theme) => theme === "dark" ? "light" : "dark"

const ThemeContext = createContext<ThemeContextType>(defaultContext);

const getLocalThemeUseCase = container.get<GetLocalThemeUseCase>(Registry.GetLocalThemeUseCase)
const setLocalThemeUseCase = container.get<SetLocalThemeUseCase>(Registry.SetLocalThemeUseCase)

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<theme>("light");

  const switchTheme = useCallback((nextTheme?: theme) => {
    if (typeof document === "undefined") return
    const newTheme = nextTheme !== undefined ? nextTheme : getNextTheme(theme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setLocalThemeUseCase.execute(newTheme);
    setTheme(newTheme);
  }, [theme]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const nextTheme = getLocalThemeUseCase.execute() || "light"
      document.documentElement.setAttribute("data-theme", nextTheme);
      setTheme(nextTheme);
    }
  }, []);

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

export type { theme, ThemeContextType }
export { ThemeContext, ThemeProvider }
