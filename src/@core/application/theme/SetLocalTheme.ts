import { theme } from "@/context/theme.provider";

class SetLocalThemeUseCase {
  execute(theme: theme): void {
    localStorage.setItem("theme", theme);
  }
}

export { SetLocalThemeUseCase };
