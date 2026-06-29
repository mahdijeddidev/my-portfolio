import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import HandMarker from "../Text/HandMarker";
import ResumeButton from "./ResumeButton";

interface HeroContentProps {
    children?: React.ReactNode;
    locale: string
}

async function HeroContent({
    children,
    locale
}: HeroContentProps) {

    const t = await getTranslations({ locale, namespace: 'HomePage' });
    const isPersian = locale === "fa";

    return (
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-start space-y-6 max-w-xl">
            {/* Greeting Badges */}
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground border border-primary/20 animate-fade-in">
                {t('greetingBadge')} 👋
            </span>

            {/* Heading Content */}
            <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                    {isPersian ? (
                        // Persian: Put name first
                        <>
                            <span className="text-primary block lg:inline">{t("name")}</span>
                            {' '}{t('title')}
                        </>
                    ) : (
                        // English: Keep as is
                        <>
                            {t('title')} {' '}
                            <span className="text-primary block lg:inline">{t("name")}</span>
                        </>
                    )}
                    <span className="sr-only"> - {t('seoSubtitle')}</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed font-normal">
                    {t('description')}
                    <Link
                        href={'/about-me'}
                        className="ms-1 text-muted-foreground text-[14px] "
                    >
                        <HandMarker>
                            {t('more')}
                        </HandMarker>
                    </Link>
                </p>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full">

                <ResumeButton locale={locale} />

                <a
                    href={`/${locale}/contact-me`}
                    className="w-full sm:w-auto h-12 px-6 inline-flex items-center justify-center font-semibold text-foreground rounded-lg border border-border bg-card hover:bg-muted transition-all cursor-pointer active:scale-98 shadow-sm"
                >
                    {t('contactMe')}
                </a>
            </div>

            {/* Separator & Social Slot */}
            {children && (
                <>
                    <hr className="w-24 border-t border-border/60 my-2" />
                    {children}
                </>
            )}
        </div>
    );
}

export default HeroContent
