"use client";

import { useEffect, useState } from "react";
// Import usePathname from your custom i18n file to match localized routes
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import { Cancel01Icon, MenuCollapseFreeIcons, Moon, Sun } from "@hugeicons/core-free-icons";
import Image from "next/image";
import MyIcon from "../Icon/MyIcons";
import LanguageSwitcher from "../locale-switcher/LanguageSwitcher";

export default function Navbar() {
    // -- states | hooks
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const locale = useLocale();
    const pathname = usePathname(); // Tracks active page status
    const t = useTranslations("Navbar");
    const { theme, setTheme } = useTheme();

    // -- Mount
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // -- UI
    const navLinks = [
        { name: t("home"), href: "/" },
        { name: t("about"), href: "/about-me" },
        { name: t("skills"), href: "/skills" },
        { name: t("projects"), href: "/projects" },
        { name: t("contact"), href: "/contact-me" },
    ];

    const today = new Intl.DateTimeFormat(locale, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date());

    return (
        <nav
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-md border-b",
                scrolled
                    ? "bg-background/80 border-border/40 shadow-xs"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link prefetch={false} href="/" className="font-bold text-xl tracking-tight text-foreground flex gap-2">
                    <Image
                        alt="logo - mahdi jeddi"
                        src={'/logo-manifest-192x192.png'}
                        width={32}
                        height={32}
                    />
                    <div className="animate-pulse text-muted-foreground text-xs flex flex-col">
                        {t('heroText')}
                        <span>{today}</span>
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        // Check if current route matches link target path
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                prefetch={false}
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "transition-colors font-medium text-sm hover:text-foreground",
                                    isActive
                                        ? "text-primary font-semibold underline underline-offset-8 decoration-2 decoration-primary "
                                        : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Action Items (Language Switcher, Dark Mode, Mobile Menu Button) */}
                <div className="flex items-center gap-4">
                    <LanguageSwitcher />

                    {/* Theme Toggle Button */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? (
                            <MyIcon icon={Sun} size={20} />
                        ) : (
                            <MyIcon icon={Moon} size={20} />
                        )}
                    </button>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-muted text-muted-foreground cursor-pointer"
                    >
                        {isOpen ? (
                            <MyIcon icon={Cancel01Icon} size={24} />
                        ) : (
                            <MyIcon icon={MenuCollapseFreeIcons} size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu Drawer */}
            {isOpen && (
                <div className="md:hidden bg-background border-b border-border px-4 pt-2 pb-4 space-y-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                                    isActive
                                        ? "text-primary bg-primary/10 font-semibold"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}
