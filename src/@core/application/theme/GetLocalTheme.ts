import { theme } from "@/context/theme.provider";

class GetLocalThemeUseCase {
  execute(): theme | null {
    const themeInLocal = localStorage.getItem("theme");
    if (!themeInLocal) return null
    if (!["light", "dark"].includes(themeInLocal)) return null
    else return themeInLocal as theme;
  }
}

export { GetLocalThemeUseCase };