import { TimerProvider } from '@/context/timer.provider';
import './globals.css'
import type { Metadata } from "next";
import { ThemeProvider } from '@/context/theme.provider';

export const metadata: Metadata = {
  title: 'My Pomodoro',
  description: 'My Pomodoro Web App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" type="image/svg" href="/assets/images/clock.svg" />
      <body>
        <ThemeProvider>
          <TimerProvider>
            {children}
          </TimerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
