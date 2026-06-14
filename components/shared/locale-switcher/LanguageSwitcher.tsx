"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { TranslationIcon } from "@hugeicons/core-free-icons";
import { useLocale } from "next-intl";
import MyIcon from "../Icon/MyIcons";

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = currentLocale === "en" ? "fa" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group relative flex items-center gap-1 h-9 px-2 rounded-full bg-muted/50 hover:bg-muted border border-border/40 transition-all duration-300 cursor-pointer select-none overflow-hidden active:scale-95"
      title={currentLocale === "en" ? "تغییر زبان به فارسی" : "Switch language to English"}
    >

      {/* Globe/Translation Icon */}
      <MyIcon
        icon={TranslationIcon}
        size={16}
        className="text-muted-foreground group-hover:text-foreground transition-colors duration-200 z-10"
      />

      {/* Text Container Wrapper */}
      <div className=" flex items-center justify-center  h-full text-[10px] font-medium tracking-wider z-10">
        <span
          className={'transition-colors duration-300  text-center text-foreground'}
        >
          {currentLocale === 'fa' ? "En" : "فا"}
        </span>
      </div>
    </button>
  );
}
