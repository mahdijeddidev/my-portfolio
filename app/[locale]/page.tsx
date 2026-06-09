'use client'

import LanguageSwitcher from "@/components/shared/locale-switcher/LanguageSwitcher";
import { useTranslations } from "next-intl";
import Image from "next/image";


// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({locale}));
// }

export default function Home() {

  const t = useTranslations('');

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">

      <LanguageSwitcher />
      {t('welcome')}
    </div>
  );
}
