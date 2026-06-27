
type Props = {
    locale: string
}
export default function StructuredData({ locale }: Props) {

    const isFa = locale === "fa";

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": isFa ? "مهدی جدی" : "Mahdi Jeddi",
        "url": `https://mahdijeddi.ir/${locale}`,
        "jobTitle": isFa ? "توسعه‌دهنده فرانت‌اند" : "Frontend Web Developer",
        "description": isFa
            ? "توسعه‌دهنده فرانت‌اند و متخصص Next.js، طراحی و پیاده‌سازی وب‌اپلیکیشن‌های بهینه و مدرن."
            : "Frontend Developer specializing in React, Next.js, TypeScript, and modern web engineering.",
        "knowsAbout": [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Frontend Development",
            "React Native",
            "Web Optimization",
            "Android Developer",
            "Mobile App Developer",
            "SEO Specialist"
        ],
        "sameAs": [
            "https://www.linkedin.com/in/mahdi-jeddi/",
            "https://github.com/mahdijeddidev",
            "https://t.me/mahdijeddidev"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
    );
}
