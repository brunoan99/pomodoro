import './globals.css'
import type { Metadata } from "next";
import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/react';

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
          <Providers>
            {children}
          </Providers>
	  <Analytics />
        </body>
      </html>
  );
}
