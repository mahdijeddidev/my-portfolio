import MyIcon from "@/components/shared/Icon/MyIcons";
import { GithubIcon, LinkIcon } from "@hugeicons/core-free-icons";
import { useTranslations } from "next-intl";
import Image from "next/image";


interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    tags: string[];
    liveHref?: string;
    githubHref?: string;
}

export default function ProjectCard({
    title,
    description,
    imageSrc,
    tags,
    liveHref,
    githubHref,
}: ProjectCardProps) {

    const t = useTranslations("ProjectsPage");

    return (
        <div className="group rounded-xl bg-card/60 border border-border/40 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl">

            {/* Visual Workspace Section */}
            <div className="relative w-full aspect-video bg-muted overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={`${title} Preview`}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={false}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent pointer-events-none" />
            </div>

            {/* Info Context Wrapper */}
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                        {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                        {description}
                    </p>
                </div>

                {/* Stack & Actions Wrapper */}
                <div className="pt-5 mt-auto space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <hr className="border-t border-border/40" />

                    {/* Call to Actions Layout */}
                    <div className="flex items-center gap-3">
                        {liveHref && (
                            <a
                                href={liveHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-primary text-primary-foreground px-3 py-2 rounded-md hover:bg-primary/90 transition-all cursor-pointer active:scale-95"
                            >
                                <MyIcon icon={LinkIcon} size={14} />
                                {t('liveDemo')}
                            </a>
                        )}

                        {githubHref && (
                            <a
                                href={githubHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground bg-muted border border-border/60 px-3 py-2 rounded-md hover:bg-muted/80 transition-all cursor-pointer active:scale-95"
                            >
                                <MyIcon icon={GithubIcon} size={14} />
                                Repository
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
