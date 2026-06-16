// app/[locale]/contact-me/page.tsx
"use client";

import AvailabilityPanel from "@/components/shared/Contact/AvailabilityPanel";
import ContactCard from "@/components/shared/Contact/ContactCard";
import HandMarker from "@/components/shared/Text/HandMarker";
import { CallIcon, Email, GithubIcon, LinkedinIcon, TelegramIcon } from "@hugeicons/core-free-icons";
import { useTranslations } from "next-intl";

export default function ContactMePage() {
    const t = useTranslations("ContactPage");

    // Interactive Channels Setup
    const communicationChannels = [
        {
            title: t("phoneTitle"),
            value: "+98 922 507 4085",
            href: "tel:+989225074085",
            icon: CallIcon,
            badgeText: t("fastestBadge"),
        },
        {
            title: t("emailTitle"),
            value: "mahdiproguni@gmail.com",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=mahdiproguni@gmail.com",
            icon: Email,
            // badgeText: t("fastestBadge"),
        },
        {
            title: t("telegramTitle"),
            value: "@mehdijeddi",
            href: "https://t.me/mehdijeddi",
            icon: TelegramIcon,
            badgeText: t("fastestBadge"),
        },
        {
            title: t("linkedinTitle"),
            value: "Mahdi Jeddi",
            href: "https://www.linkedin.com/in/mahdi-jeddi/",
            icon: LinkedinIcon,
        },
        {
            title: t("githubTitle"),
            value: "mahdijeddy",
            href: "https://github.com/mahdijeddy",
            icon: GithubIcon,
        },
    ];

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center lg:h-[calc(100vh-4rem)] py-8 lg:py-0 overflow-hidden">

            {/* Background Decorative Radial Mask */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />

            {/* Main Framework Layout */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center justify-items-center">

                {/* Left Side Status Context */}
                <AvailabilityPanel
                    badge={t("badge")}
                    title={t("title")}
                    // subtitle={t.rich("subtitle" , ()=>{ return <HandMarker>{t("advancedClientSideDeveloper")}</HandMarker> })}
                    subtitle={t.rich("subtitle", {
                        marker: (chunks) => <HandMarker>{chunks}</HandMarker>
                    })}
                    statusText={t("statusActive")}
                    timezoneLabel={t("timezoneLabel")}
                />

                {/* Right Side Matrix Grid */}
                <div className="w-full max-w-md flex flex-col gap-3.5">
                    {communicationChannels.map((channel, idx) => (
                        <ContactCard
                            key={idx}
                            title={channel.title}
                            value={channel.value}
                            href={channel.href}
                            icon={channel.icon}
                            badgeText={channel.badgeText}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
