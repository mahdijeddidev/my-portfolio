'use client';

 
import { usePathname, useRouter } from '@/i18n/navigation';
import {useLocale} from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, {locale: newLocale});
  };

  return (
    <div className="flex gap-2">
      {['en', 'fa'].map((lang) => (
        <button
          key={lang}
          onClick={() => switchLanguage(lang)}
          className={`px-2 py-1 rounded ${
            locale === lang 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 dark:bg-gray-700'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}