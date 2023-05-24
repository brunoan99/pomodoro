"use client";

import { GetLocalThemeUseCase, SetLocalThemeUseCase } from "@/@core/application/theme";
import { Registry, container } from "@/@core/infra/container-registry";
import { PropsWithChildren, createContext, useCallback, useEffect, useState } from "react";

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

const getLocalThemeUseCase = container.get<GetLocalThemeUseCase>(Registry.GetLocalThemeUseCase)
const setLocalThemeUseCase = container.get<SetLocalThemeUseCase>(Registry.SetLocalThemeUseCase)

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<theme>(getLocalThemeUseCase.execute() || "light");

  const switchTheme = useCallback(() => {
    const nextTheme = theme == "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    setLocalThemeUseCase.execute(nextTheme);
    setTheme(nextTheme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  });

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
