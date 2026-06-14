'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const router = useRouter();
    const isDev = process.env.NODE_ENV === "development";

    useEffect(() => {
        console.error("Error caught:", error);
    }, [error]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-destructive/5 to-background px-4">
            <div className="w-full max-w-md space-y-6">
                {/* Error Icon */}
                <div className="flex justify-center">
                    <div className="rounded-full bg-destructive/10 p-4">
                        <svg
                            className="h-8 w-8 text-destructive"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Error Content */}
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Oops! Something went wrong</h1>
                    <p className="text-muted-foreground">
                        We encountered an unexpected error. Please try again.
                    </p>
                </div>

                {/* Error Details (Development Only) */}
                {isDev && (
                    <div className="space-y-2 rounded-lg bg-muted p-4">
                        <p className="text-sm font-semibold text-foreground">Error Details:</p>
                        <p className="font-mono text-xs text-destructive">
                            {error.message || "Unknown error"}
                        </p>
                        {error.digest && (
                            <p className="font-mono text-xs text-muted-foreground">
                                Digest: {error.digest}
                            </p>
                        )}
                        <details className="mt-2">
                            <summary className="cursor-pointer text-xs text-muted-foreground hover:text-foreground">
                                Stack trace
                            </summary>
                            <pre className="mt-2 overflow-auto rounded bg-background p-2 text-xs text-muted-foreground">
                                {error.stack}
                            </pre>
                        </details>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button onClick={reset} className="sm:flex-1">
                        Try Again
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => router.push("/")}
                        className="sm:flex-1"
                    >
                        Go Home
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={() => router.back()}
                        className="sm:flex-1"
                    >
                        Go Back
                    </Button>
                </div>

                {/* Support Message */}
                <div className="rounded-lg bg-muted/50 p-4 text-center text-sm text-muted-foreground">
                    <p>If the problem persists, please contact support or try clearing your cache.</p>
                </div>
            </div>
        </div>
    );
}
