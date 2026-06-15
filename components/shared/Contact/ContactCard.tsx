import MyIcon from "@/components/shared/Icon/MyIcons";
import { ComponentType } from "react";

interface ContactCardProps {
    title: string;
    value: string;
    href: string;
    icon: object | ComponentType<unknown>;
    badgeText?: string;
}

export default function ContactCard({ title, value, href, icon, badgeText }: ContactCardProps) {
    return (
        <a
            href={href}
            target={href.startsWith("http") || href.startsWith("https") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-card/60 border border-border/40 backdrop-blur-md flex items-center justify-between transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-lg group"
        >
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <MyIcon icon={icon} size={20} />
                </div>
                <div className="flex flex-col text-left" dir="ltr">
                    <span className="text-xs text-muted-foreground font-medium">{title}</span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-0.5">
                        {value}
                    </span>
                </div>
            </div>

            {badgeText && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent text-accent-foreground border border-primary/10">
                    {badgeText}
                </span>
            )}
        </a>
    );
}
