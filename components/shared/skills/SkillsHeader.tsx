import MyIcon from "@/components/shared/Icon/MyIcons";
import { Link } from "@/i18n/navigation";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface SkillsHeaderProps {
    badge: string;
    title: string;
    subtitle: string;
    actionText: string;
    locale: string
}

export default function SkillsHeader({ badge, title, subtitle, actionText, locale }: SkillsHeaderProps) {
    return (
        <div className="w-full flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground border border-primary/20">
                {badge} 🛠️
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                {title}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                {subtitle}
            </p>

            <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:underline group pt-1"
            >
                {actionText}
                <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                    <MyIcon icon={locale === 'fa' ? ArrowLeft01Icon : ArrowRight01Icon} size={14} />
                </span>
            </Link>
        </div>
    );
}
