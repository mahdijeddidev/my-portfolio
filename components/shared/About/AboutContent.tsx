import MyIcon from "@/components/shared/Icon/MyIcons";
import { Link } from "@/i18n/navigation";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface AboutContentProps {
    badge: string;
    title: string;
    subtitle: string;
    story: string;
    actionText: string;
    actionHref: string;
    children?: React.ReactNode;
    locale?: string
}

export default function AboutContent({
    badge,
    title,
    subtitle,
    story,
    actionText,
    actionHref,
    locale,
    children,
}: AboutContentProps) {
    return (
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-start space-y-5 max-w-xl">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground border border-primary/20 animate-fade-in">
                {badge} ✨
            </span>

            <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                    {title}
                </h1>

                <h2 className="text-lg font-semibold text-primary">
                    {subtitle}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed font-normal">
                    {story}
                </p>

            </div>

            {children}

            <div className="pt-4 w-full flex justify-center lg:justify-start">
                <Link
                    href={actionHref}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-primary/90 transition-all cursor-pointer active:scale-98 group"
                >
                    {actionText}
                    <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                        <MyIcon icon={locale === 'fa' ? ArrowLeft01Icon : ArrowRight01Icon} size={18} />
                    </span>
                </Link>
            </div>
        </div>
    );
}
