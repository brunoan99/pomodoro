import { theme } from "@/context/theme.provider";

class SetLocalThemeUseCase {
  execute(theme: theme): void {
    if (typeof window !== 'undefined') localStorage.setItem("theme", theme);
    if (document) document.cookie = `themeSwitch=${theme}`
  }
}

export { SetLocalThemeUseCase };
