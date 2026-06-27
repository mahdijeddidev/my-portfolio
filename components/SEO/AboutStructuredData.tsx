interface AboutStructuredDataProps {
    email: string;
    phone: string;
    sameAs?: string[];
    locale: string
}

export default function AboutStructuredData({
    email,
    phone,
    sameAs = [],
    locale
}: AboutStructuredDataProps) {

    const isFa = locale === "fa";

    const schema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: isFa
            ? "درباره مهدی جدی"
            : "About Mahdi Jeddi",
        "jobTitle": "Full Stack Developer",
        "description": "Full Stack Developer specializing in React, Next.js and TypeScript.",
        "mainEntity": {
            "mainEntityOfPage": "https://mahdijeddi.ir/en/about-me",
            "@type": "Person",
            "name": "Mahdi Jeddi",
            "jobTitle": "Full Stack Developer",
            "email": email,
            "telephone": phone,
            "image": "https://mahdijeddi.ir/photo-me.png",
            "sameAs": [
                "https://www.linkedin.com/in/mahdi-jeddi/",
                "https://github.com/mahdijeddidev",
                "https://t.me/mahdijeddidev",
                ...sameAs,
            ],
        },
        "url": `https://mahdijeddi.ir/${locale}/about-me`,
        "availableLanguage": [
            "en",
            "fa"
        ],

    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
