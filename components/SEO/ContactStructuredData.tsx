"use client";

import { useLocale } from "next-intl";

interface ContactStructuredDataProps {
    email: string;
    phone: string;
    sameAs?: string[];
}

export default function ContactStructuredData({
    email,
    phone,
    sameAs = [],
}: ContactStructuredDataProps) {
    const locale = useLocale();

    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Mahdi Jeddi",
        "jobTitle": "Full Stack Developer",
        "url": `https://mahdijeddi.ir/${locale}`,
        "email": email,
        "telephone": phone,
        "sameAs": [
            "https://www.linkedin.com/in/mahdi-jeddi/",
            "https://github.com/mahdijeddy",
            "https://t.me/mehdijeddi",
            ...sameAs,
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": phone,
            "contactType": "Sales",
            "availableLanguage": ["English", "Persian"],
            "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "opens": "07:00",
                "closes": "21:00",
                "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
