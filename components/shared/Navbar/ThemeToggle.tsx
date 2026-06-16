"use client";

import { Moon, Sun } from "@hugeicons/core-free-icons";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import MyIcon from "../Icon/MyIcons";

// Import your Shadcn Tooltip primitives
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeToggle() {
    const { setTheme, theme = "light" } = useTheme();
    const t = useTranslations("Navbar");
    const isDark = theme === "dark";

    return (
        <TooltipProvider delayDuration={200}>
            <Tooltip>
                <TooltipTrigger asChild suppressHydrationWarning>
                    <button
                        onClick={() => setTheme(isDark ? "light" : "dark")}
                        className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label="Toggle Theme"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={theme}
                                initial={{ y: 15, opacity: 0, rotate: 40 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                exit={{ y: -15, opacity: 0, rotate: -40 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="flex items-center justify-center"
                            >
                                {isDark ? (
                                    <MyIcon icon={Sun} size={20} />
                                ) : (
                                    <MyIcon icon={Moon} size={20} />
                                )}
                            </motion.div>

                        </AnimatePresence>


                    </button>
                </TooltipTrigger>

                <TooltipContent
                    side="bottom"
                    align="center"
                    className="bg-popover text-popover-foreground border border-border/60 px-3 py-1.5 shadow-md backdrop-blur-xs flex flex-col gap-0.5 text-xs font-medium"
                >
                    <p className="font-semibold text-foreground">
                        {t("themeStateTitle")}
                    </p>

                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
