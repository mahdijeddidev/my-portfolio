"use client";

import SkillCard from "@/components/shared/skills/SkillCard";
import SkillsHeader from "@/components/shared/skills/SkillsHeader";
import { useLocale, useTranslations } from "next-intl";

export default function SkillsPage() {
    const t = useTranslations("SkillsPage");
    const locale = useLocale();

    const skillsData = [
        {
            title: t("catCoreTitle"),
            description: t("catCoreDesc"),
            tags: [
                { name: "Next.js", href: "https://nextjs.org" },
                { name: "React", href: "https://react.dev" },
                { name: "TypeScript", href: "https://www.typescriptlang.org" },
                { name: "JavaScript (ES6+)", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            ],
        },
        {
            title: t("catStateTitle"),
            description: t("catStateDesc"),
            tags: [
                { name: "Zustand", href: "https://zustand-demo.pmnd.rs" },
                { name: "Redux Toolkit", href: "https://redux-toolkit.js.org" },
                { name: "Redux Saga", href: "https://redux-saga.js.org" },
                { name: "MobX", href: "https://mobx.js.org" },
            ],
        },
        {
            title: t("catUiTitle"),
            description: t("catUiDesc"),
            tags: [
                { name: "Tailwind CSS", href: "https://tailwindcss.com" },
                { name: "Shadcn UI", href: "https://ui.shadcn.com" },
                { name: "Ant Design", href: "https://ant.design" },
            ],
        },
        {
            title: t("catAdvancedTitle"),
            description: t("catAdvancedDesc"),
            tags: [
                { name: "WebSockets", href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
                { name: "React Query", href: "https://tanstack.com/query/latest" },
                { name: "RTK Query", href: "https://redux-toolkit.js.org/rtk-query/overview" },
                { name: "PWA", href: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" },
            ],
        },
        {
            title: t("catMobileTitle"),
            description: t("catMobileDesc"),
            tags: [
                { name: "React Native", href: "https://reactnative.dev" },
                { name: "Java", href: "https://www.oracle.com/java/" },
                { name: "Android Studio", href: "https://developer.android.com/studio" },
            ],
        },
        {
            title: t("catOpsTitle"),
            description: t("catOpsDesc"),
            tags: [
                { name: "IIS / iisnode", href: "https://github.com/azure/iisnode" },
                { name: "Nginx (Linux)", href: "https://nginx.org" },
                { name: "SEO Optimization", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
                { name: "Core Web Vitals", href: "https://web.dev/vitals/" },
            ],
        },
    ];

    return (
        // <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center py-10 lg:py-4 overflow-hidden">
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-start pt-24 pb-12 overflow-hidden">
            {/* Background */}
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />

            {/* Introductions */}
            <SkillsHeader
                locale={locale}
                badge={t("badge")}
                title={t("title")}
                subtitle={t("subtitle")}
                actionText={t("actionText")}
            />

            {/* Technical Skill Matrix Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {skillsData.map((skill, index) => (
                    <SkillCard
                        key={index}
                        title={skill.title}
                        description={skill.description}
                        tags={skill.tags}
                    />
                ))}
            </div>
        </section >
    );
}
