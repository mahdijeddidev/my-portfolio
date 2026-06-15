'use client';

import MyIcon from "@/components/shared/Icon/MyIcons";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { AlertCircleIcon } from "@hugeicons/core-free-icons";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LocalizedError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const router = useRouter();
    const t = useTranslations("ErrorPage");
    const locale = useLocale();
    const isDev = process.env.NODE_ENV === "development";
    const isPersian = locale === "fa";

    useEffect(() => {
        console.error("Localized application error caught:", error);
    }, [error]);

    return (
        <div
            dir={isPersian ? "rtl" : "ltr"}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-12 overflow-hidden"
        >
            <div className="w-full max-w-md space-y-6">
                {/* Immersive Ambient Flare */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-destructive/10 rounded-full filter blur-3xl -z-10 pointer-events-none" />

                {/* Error Icon */}
                <div className="flex justify-center">
                    <div className="rounded-2xl bg-destructive/10 border border-destructive/20 p-4 text-destructive shadow-lg shadow-destructive/5 animate-pulse">
                        <MyIcon icon={AlertCircleIcon} size={32} />
                    </div>
                </div>

                {/* Core Text Info */}
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
                        {t("title")}
                    </h1>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                        {t("description")}
                    </p>
                </div>

                {/* Developer Details Box (Only active during local development) */}
                {isDev && (
                    <div className="space-y-2 rounded-xl bg-muted/60 border border-border/40 p-4 text-left" dir="ltr">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            {t("details")}
                        </p>
                        <p className="font-mono text-xs font-semibold text-destructive break-all">
                            {error.message || t("unknownError")}
                        </p>
                        {error.digest && (
                            <p className="font-mono text-[11px] text-muted-foreground">
                                Digest: {error.digest}
                            </p>
                        )}
                        <details className="mt-2 group">
                            <summary className="cursor-pointer text-xs text-muted-foreground hover:text-foreground select-none transition-colors font-medium">
                                {t("stackTrace")}
                            </summary>
                            <pre className="mt-2 overflow-auto rounded-lg bg-background/80 border border-border/30 p-3 font-mono text-[11px] text-muted-foreground max-h-48 whitespace-pre-wrap">
                                {error.stack}
                            </pre>
                        </details>
                    </div>
                )}

                {/* Action Controls */}
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-center pt-2">
                    <Button onClick={reset} className="sm:flex-1 h-10 font-semibold shadow-md shadow-primary/10 cursor-pointer">
                        {t("tryAgain")}
                    </Button>
                    <Button
                        variant="outline"
                        asChild
                        className="sm:flex-1 h-10 font-semibold bg-muted/40 cursor-pointer"
                    >
                        <Link href="/">
                            {t("goHome")}
                        </Link>
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={() => router.back()}
                        className="sm:flex-1 h-10 font-semibold text-muted-foreground cursor-pointer"
                    >
                        {t("goBack")}
                    </Button>
                </div>

                {/* Background Support Card */}
                <div className="rounded-xl bg-muted/40 border border-border/20 p-4 text-center text-xs text-muted-foreground leading-relaxed">
                    <p>{t("support")}</p>
                </div>
            </div>
        </div>
    );
}
