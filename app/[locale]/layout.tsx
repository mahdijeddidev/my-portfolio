import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/providers/theme-provider";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const vazirmatn = localFont({
  src: "../../fonts/vazir/Vazirmatn.woff2",
  variable: "--font-vazirmatn",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mahdi Portfolio",
    default: "Mahdi - Full Stack Developer Portfolio",
  },
  description: "Professional portfolio showcasing web development projects",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const isPersian = locale === "fa";

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      dir={isPersian ? "rtl" : "ltr"}
      className={`${isPersian ? vazirmatn.variable : geistSans.variable} h-full`}
    >
      <body className="min-h-full antialiased flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
