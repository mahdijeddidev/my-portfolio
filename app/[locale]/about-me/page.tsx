
import AboutStructuredData from "@/components/SEO/AboutStructuredData";
import AboutContent from "@/components/shared/About/AboutContent";
import AboutStats from "@/components/shared/About/AboutStats";
import CodeCard from "@/components/shared/About/CodeCard";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
    params: Promise<{
        locale: string;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "metadata.about" });

    const baseUrl = 'https://mahdijeddi.ir'
    const url = `${baseUrl}/${locale}/about-me`;

    const ogImageUrl = `${baseUrl}/og-en.png`

    return {
        title: t('title'),
        description: t("description"),
        alternates: {
            canonical: url,
            languages: {
                en: `${baseUrl}/en/about-me`,
                fa: `${baseUrl}/fa/about-me`,
                "x-default": `${baseUrl}/en/about-me`,
            }
        },
        openGraph: {
            title: t("title"),
            description: t("description"),
            url,
            siteName: "Mahdi Jeddi",
            type: "profile",
            locale: locale === "fa" ? "fa_IR" : "en_US",
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: t("openGraphImageAlt"),
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: t("title"),
            description: t("description"),
            images: [ogImageUrl],
        },
    };
}

async function AboutMePage({ params }: Props) {

    const { locale } = await params
    const t = await getTranslations({
        locale,
        namespace: "AboutPage",
    });

    const phone = "+98 922 507 4085";
    const email = "mahdijeddidev@gmail.com";

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

            <AboutStructuredData
                email={email} phone={phone} locale={locale}
            />

        </section>
    );
}

export default AboutMePage
