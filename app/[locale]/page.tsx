"use client";

import HeroContent from "@/components/shared/Hero/HeroContent";
import HeroImage from "@/components/shared/Hero/HeroImage";
import SocialLinks from "@/components/shared/Hero/SocialLinks";
import MyIcon from "@/components/shared/Icon/MyIcons";
import { Email, GithubIcon, LinkedinIcon, TelegramIcon } from "@hugeicons/core-free-icons";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  // -- states | Hooks
  const t = useTranslations("HomePage");
  const locale = useLocale();

  //  -- UI
  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/mahdi-jeddi/", icon: <MyIcon icon={LinkedinIcon} size={24} /> },
    { name: "GitHub", href: "https://github.com/mahdijeddy", icon: <MyIcon icon={GithubIcon} size={24} /> },
    { name: "Telegram", href: "https://t.me/mehdijeddi", icon: <MyIcon icon={TelegramIcon} size={24} /> },
    { name: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=mahdiproguni@gmail.com", icon: <MyIcon icon={Email} size={24} /> },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center lg:h-[calc(100vh-4rem)] py-8 lg:py-0 overflow-hidden">

      {/* Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl -z-10 pointer-events-none" />

      {/* Main Grid Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center justify-items-center">


        {/* Visual Side */}
        <HeroImage src="/photo-me.png" alt="Mahdi jeddi Profile Picture" />

        {/* Text and Actions Side */}
        <HeroContent
          greetingBadge={t("greetingBadge")}
          title={t("title")}
          name={t("name")}
          description={t("description")}
          downloadText={t("downloadResume")}
          contactText={t("contactMe")}
          contactHref={`/${locale}/contact-me`}
        >
          <SocialLinks links={socials} />
        </HeroContent>

      </div>
    </section>
  );
}
