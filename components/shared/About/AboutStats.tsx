interface StatItem {
    value: string;
    label: string;
}

interface AboutStatsProps {
    stats: StatItem[];
}

export default function AboutStats({ stats }: AboutStatsProps) {
    return (
        <div className="grid grid-cols-2 gap-4 w-full pt-4">
            {stats.map((stat, idx) => (
                <div
                    key={idx}
                    className="p-4 rounded-xl bg-card/50 border border-border/60 backdrop-blur-xs flex flex-col justify-center items-center text-center transition-all hover:border-primary/30"
                >
                    <span className="text-2xl sm:text-3xl font-black text-primary">
                        {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
                        {stat.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
