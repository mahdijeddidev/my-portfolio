'use client'

import LanguageSwitcher from "@/components/shared/locale-switcher/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";


// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({locale}));
// }

export default function Home() {

  const t = useTranslations('');
  const {theme , setTheme} = useTheme()
 
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">

      <LanguageSwitcher />
      {t('welcome')}

        <Button variant="outline" size="icon" onClick={() => theme === "dark" ? setTheme("light"): setTheme("dark")}>
          <HugeiconsIcon icon={Sun} className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <HugeiconsIcon icon={Moon} className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
    </div>
  );
}
