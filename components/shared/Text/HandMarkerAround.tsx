"use client";

import React from "react";

export default function HandMarkerAround({ children }: { children: React.ReactNode }) {
    return (
        <span className="relative inline-block px-3 py-0.5 group/marker">
            <span className="relative z-10">{children}</span>
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-[108%] h-[120%] -left-[4%] -top-[10%] text-primary/40 fill-none stroke-current stroke-[2] stroke-linecap-round pointer-events-none z-0 overflow-visible"
            >
                {/* Complete asymmetrical continuous tracking wrap circle loop */}
                <path
                    d="M 5 40 C 3 15, 45 5, 92 12 C 102 45, 95 85, 55 92 C 12 95, -2 65, 8 44 C 15 30, 60 22, 88 28"
                    pathLength="1"
                    className="animate-[markerDraw_0.7s_ease-in-out_forwards]"
                />
            </svg>
        </span>
    );
}
