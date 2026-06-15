import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";

import PageTransition from "@/components/Layout/PageTransition";
import { ThemeProvider } from "@/components/providers/theme-provider";
import FloatingBackground from "@/components/shared/backGround/FloatingBackground";
import Navbar from "@/components/shared/Navbar/Navbar";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const { locale } = await params;
  const isPersian = locale === "fa";
  const t = await getMessages();

  const baseUrl = "https://mahdijeddi.ir";

  const siteTitle = isPersian
    ? "مهدی جدی | توسعه‌دهنده فرانت‌اند و فول‌استک"
    : "Mahdi Jeddi | Frontend & Full Stack Developer";

  const siteDesc = isPersian
    ? "نمونه کارها و پروژه‌های مهدی جدی، توسعه‌دهنده وب پیشرفته. متخصص در React ،Next.js و بهینه‌سازی کارایی برنامه."
    : "Professional portfolio of Mahdi Jeddi, an advanced web developer specializing in React, Next.js, and high-performance frontend architecture.";

  return {
    title: {
      template: `%s | ${isPersian ? "مهدی جدی" : "Mahdi Portfolio"}`,
      default: siteTitle,
    },
    description: siteDesc,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        fa: `${baseUrl}/fa`,
      },
    },
    openGraph: {
      title: siteTitle,
      description: siteDesc,
      url: `${baseUrl}/${locale}`,
      siteName: "Mahdi Jeddi Portfolio",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      type: "profile",
      firstName: "Mahdi",
      lastName: "Jeddi",
      username: "mahdijeddy",
      images: [
        {
          url: "/logo-manifest-512x512.png", // Reuses your existing high-res asset
          width: 512,
          height: 512,
          alt: "Mahdi Jeddi Design Brand Signature Layout",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDesc,
      images: ["/logo-manifest-512x512.png"],
    }
  };
}

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
      <body
        className={`
        min-h-screen bg-background text-foreground antialiased flex flex-col
        ${isPersian ? "font-[family-name:var(--font-vazirmatn)]" : "font-[family-name:var(--font-geist-sans)]"}
        `  }
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider >
            <Navbar />

            <FloatingBackground />

            <main className="flex-1 pt-16 flex flex-col w-full">
              <PageTransition>
                {children}
              </PageTransition>
            </main>

          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
