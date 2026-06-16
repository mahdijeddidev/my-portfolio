"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Cancel01Icon, MenuCollapseFreeIcons } from "@hugeicons/core-free-icons"; // Re-imported icons
import Image from "next/image";
import MyIcon from "../Icon/MyIcons"; // Re-imported MyIcon
import LanguageSwitcher from "../locale-switcher/LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    // -- states | hooks
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const locale = useLocale();
    const pathname = usePathname();
    const t = useTranslations("Navbar");

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
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                prefetch={false}
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "relative transition-colors font-medium text-sm py-2 pb-2.5 hover:text-foreground",
                                    isActive ? "text-primary font-semibold" : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNavbarUnderline"
                                        className="absolute bottom-0 inset-x-0 h-0.5 bg-primary rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Action Items */}
                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <ThemeToggle />

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-muted text-muted-foreground transition-colors cursor-pointer"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <MyIcon icon={Cancel01Icon} size={24} />
                        ) : (
                            <MyIcon icon={MenuCollapseFreeIcons} size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu Drawer with clean transition performance */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="md:hidden bg-background border-b border-border px-4 pt-2 pb-4 space-y-1 overflow-hidden"
                    >
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
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
