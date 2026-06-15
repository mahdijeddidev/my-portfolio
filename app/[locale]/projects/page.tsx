"use client";

import ProjectCard from "@/components/shared/Projects/ProjectCard";
import ProjectsHeader from "@/components/shared/Projects/ProjectsHeader";
import { useLocale, useTranslations } from "next-intl";

export default function ProjectsPage() {
    const t = useTranslations("ProjectsPage");
    const locale = useLocale();

    // Project Matrix Configuration Data
    const portfolioProjects = [
        {
            title: t("proj1Title"),
            description: t("proj1Desc"),
            imageSrc: "/projects-images/intsw.ir.webp",
            tags: ["Next.js", "Next-intl", "TypeScript", "Redux", "Tailwind CSS", "IIS"],
            liveHref: "https://intsw.ir",
        },
        {
            title: t("proj2Title"),
            description: t("proj2Desc"),
            imageSrc: "/projects-images/ntsw-app.webp",
            tags: ["React Native", "Redux Toolkit", "TypeScript", "Native Modules"],
            liveHref: "https://cafebazaar.ir/app/ir.ntsw",
        },
        // {
        //     title: t("proj3Title"),
        //     description: t("proj3Desc"),
        //     imageSrc: "/p3.png",
        //     tags: ["React", "TypeScript", "Redux Saga", "WebSockets"],
        //     liveHref: "https://your-live-link.com",
        // },
    ];

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center py-10 lg:py-6 overflow-hidden">

            {/* Background Flare */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />

            {/* Frame Introductions */}
            <ProjectsHeader
                badge={t("badge")}
                title={t("title")}
                subtitle={t("subtitle")}
                actionText={t("actionText")}
                locale={locale}
            />

            {/* Grid Architecture */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {portfolioProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.imageSrc}
                        tags={project.tags}
                        liveHref={project.liveHref}
                    />
                ))}
            </div>

        </section>
    );
}
