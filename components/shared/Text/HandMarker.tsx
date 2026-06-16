"use client";

import React from "react";

interface HandMarkerProps {
    children: React.ReactNode;
}

export default function HandMarker({ children }: HandMarkerProps) {
    return (
        <span className="relative inline-block px-1 white-space-nowrap group/marker">
            {/* The Text Target */}
            <span className="relative z-10">{children}</span>

            {/* The Hand-Drawn SVG Vector Underline overlay */}
            <svg
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                className="absolute left-0 bottom-[-2px] w-full h-[8px] text-primary/30 fill-none stroke-current stroke-[2.5] stroke-linecap-round pointer-events-none z-0 overflow-visible opacity-85"
            >
                <path
                    d="M 1 5 C 20 2, 40 7, 60 4 C 75 2, 90 6, 99 3.5"
                    pathLength="1"
                    className="animate-[markerDraw_0.6s_ease-out_forwards]"
                />
            </svg>
        </span>
    );
}
