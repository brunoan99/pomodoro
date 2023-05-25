"use client";

import { TimerProvider } from "@/context"
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider attribute="data-theme">
    <TimerProvider>
      {children}
    </TimerProvider>
  </ThemeProvider>
)

export { Providers }
