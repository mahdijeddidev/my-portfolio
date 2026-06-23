import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mahdijeddi.ir";
  const locales = ["en", "fa"];
  const routes = ["", "/about-me", "/skills", "/projects", "/contact-me"];

  const sitemapEntries: MetadataRoute.Sitemap = [];
  const lastModified = new Date("2026-06-23");

  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified,
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            fa: `${baseUrl}/fa${route}`,
            "x-default": `${baseUrl}/en${route}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
