
interface SkillTag {
    name: string;
    href: string;
}

interface SkillCardProps {
    title: string;
    description: string;
    tags: SkillTag[];
}

export default function SkillCard({ title, description, tags }: SkillCardProps) {
    return (
        <div className="p-5 rounded-xl bg-card/60 border border-border/40 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl group">
            <div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 mb-4 leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-auto">
                {tags.map((tag) => (
                    <a
                        key={tag.name}
                        href={tag.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] sm:text-xs font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/20 transition-all hover:bg-primary/10 hover:text-primary hover:border-primary/30 active:scale-95"
                    >
                        {tag.name}
                    </a>
                ))}
            </div>
        </div>
    );
}
