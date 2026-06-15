"use client";

import MyIcon from "@/components/shared/Icon/MyIcons";
import { Link } from "@/i18n/navigation";
import { ArrowRight02Icon, Help } from "@hugeicons/core-free-icons";
import { useTranslations } from "next-intl";

export default function NotFound() {
    const t = useTranslations("NotFoundPage");

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-12 overflow-hidden">

            {/* Immersive Center Ambient Light Flare */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl -z-10 pointer-events-none" />

            <div className="flex flex-col items-center justify-center max-w-md text-center space-y-6">

                {/* Dynamic Glowing Alert Badge */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center animate-bounce shadow-lg shadow-primary/5">
                    <MyIcon icon={Help} size={32} />
                </div>

                {/* Core Text Section */}
                <div className="space-y-2">
                    <h1 className="text-7xl font-extrabold tracking-extratight text-primary tabular-nums">
                        404
                    </h1>
                    <h2 className="text-2xl font-bold text-foreground tracking-tight">
                        {t("title")}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                        {t("description")}
                    </p>
                </div>

                {/* Dynamic CTA Navigation Node */}
                <div className="pt-2">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-all shadow-md shadow-primary/10 hover:shadow-primary/20 active:scale-95 group cursor-pointer"
                    >
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                            <MyIcon icon={ArrowRight02Icon} size={16} />
                        </span>
                        {t("buttonText")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
