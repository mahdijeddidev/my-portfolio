// app/[locale]/about-me/page.tsx
"use client";

import AboutContent from "@/components/shared/About/AboutContent";
import AboutStats from "@/components/shared/About/AboutStats";
import CodeCard from "@/components/shared/About/CodeCard";
import { useLocale, useTranslations } from "next-intl";

export default function AboutMePage() {
    const t = useTranslations("AboutPage");
    const locale = useLocale();

    // Dashboard Stats Config
    const metrics = [
        { value: t("statExpValue"), label: t("statExpLabel") },
        { value: t("statProjValue"), label: t("statProjLabel") },
    ];

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center lg:h-[calc(100vh-4rem)] py-8 lg:py-0 overflow-hidden">

            <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />

            {/* Layout Grid  */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center">

                {/* Left Hand Context Container */}
                <AboutContent
                    badge={t("badge")}
                    title={t("title")}
                    subtitle={t("subtitle")}
                    story={t("story")}
                    actionText={t("actionText")}
                    actionHref="/skills"
                    locale={locale}
                >
                    <AboutStats stats={metrics} />
                </AboutContent>

                {/* Right Hand - code*/}
                <CodeCard title="mahdi.config.js" />

            </div>
        </section>
    );
}
