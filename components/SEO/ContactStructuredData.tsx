interface ContactStructuredDataProps {
    email: string;
    phone: string;
    sameAs?: string[];
    locale: string
}

export default function ContactStructuredData({
    email,
    phone,
    sameAs = [],
    locale
}: ContactStructuredDataProps) {


    const schema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Mahdi Jeddi",
        "contactType": "customer support",
        "jobTitle": "Full Stack Developer",
        "url": `https://mahdijeddi.ir/${locale}/contact-me`,
        "email": email,
        "image": "https://mahdijeddi.ir/photo-me.png",
        "telephone": phone,
        "availableLanguage": [
            "en",
            "fa"
        ],
        "sameAs": [
            "https://www.linkedin.com/in/mahdi-jeddi/",
            "https://github.com/mahdijeddidev",
            "https://t.me/mahdijeddidev",
            ...sameAs,
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": phone,
            "email": email,
            "contactType": "Business",
            "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "opens": "07:00",
                "closes": "21:00",
                "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            },
            "availableLanguage": [
                "en",
                "fa"
            ]
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
