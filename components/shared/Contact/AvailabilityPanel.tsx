"use client";

import { useEffect, useState } from "react";

interface AvailabilityPanelProps {
    badge: string;
    title: string;
    subtitle: string;
    statusText: string;
    timezoneLabel: string;
}

export default function AvailabilityPanel({
    badge,
    title,
    subtitle,
    statusText,
    timezoneLabel,
}: AvailabilityPanelProps) {
    // Initialize with a fallback string to prevent SSR hydration errors
    const [currentTime, setCurrentTime] = useState<string>("...");

    useEffect(() => {
        const updateTime = () => {
            const formatter = new Intl.DateTimeFormat("en-US", {
                timeZone: "Asia/Tehran",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            });

            setCurrentTime(`${formatter.format(new Date())} (GMT+3:30)`);
        };

        // Set initial time immediately on mount
        updateTime();

        // Setup real-time interval stream tick
        const timer = setInterval(updateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-start space-y-6 max-w-xl">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground border border-primary/20">
                {badge} ✉️
            </span>

            <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                    {title}
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed font-normal">
                    {subtitle}
                </p>
            </div>

            {/* Dynamic System Status Layout Blocks */}
            <div className="w-full space-y-3 pt-2">
                {/* Availability Badge */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-card/40 border border-border/30">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-foreground">{statusText}</span>
                </div>

                {/* Timezone Coordinate Badge */}
                <div className="flex flex-col p-3.5 rounded-xl bg-card/40 border border-border/30 " >
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                        {timezoneLabel}
                    </span>
                    <span className="text-sm font-bold text-primary mt-0.5 tabular-nums tracking-wide">
                        {currentTime}
                    </span>
                </div>
            </div>
        </div>
    );
}
