import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'fa'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'always'
});
