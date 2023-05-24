import { theme } from "@/context/theme.provider";

class GetLocalThemeUseCase {
  execute(): theme | null {
    if (typeof window !== 'undefined') {
      const themeInLocal = localStorage.getItem("theme");
      if (!themeInLocal) return null
      if (!["light", "dark"].includes(themeInLocal)) return null
      else return themeInLocal as theme;
    } else return null
  }
}

export { GetLocalThemeUseCase };
