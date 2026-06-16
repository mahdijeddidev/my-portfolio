// components/providers/theme-provider.tsx
"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {

  // for skip react-19 complain about script injecting
  const scriptProps = typeof window === "undefined" ? undefined : ({ type: "application/json" } as const);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={true}
      scriptProps={scriptProps}
    >
      {children}
    </NextThemesProvider>
  )
}
