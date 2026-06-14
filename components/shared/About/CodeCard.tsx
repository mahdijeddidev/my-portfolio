interface CodeCardProps {
    title: string;
}

export default function CodeCard({ title }: CodeCardProps) {
    return (
        <div className="relative order-1 lg:order-2 w-full max-w-md bg-zinc-950 text-zinc-400 p-4 rounded-xl shadow-2xl border border-zinc-800 font-mono text-xs sm:text-sm leading-relaxed overflow-hidden group">
            {/* Mac Window Controls Bar */}
            <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] text-zinc-500 font-sans tracking-tight">{title}</span>
                <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Code Block Snippet */}
            <div className="space-y-1 text-left select-none" dir="ltr">
                <p><span className="text-pink-500">const</span> developer = &#123;</p>
                <p className="pl-4"><span className="text-sky-400">name</span>: <span className="text-amber-300">&quot;Mahdi Jeddi&quot;</span>,</p>
                <p className="pl-4"><span className="text-sky-400">role</span>: <span className="text-amber-300">&quot;Full Stack Developer&quot;</span>,</p>
                <p className="pl-4"><span className="text-sky-400">specialty</span>: <span className="text-purple-400">&#91;</span><span className="text-amber-300">&quot;Next.js&quot;</span>, <span className="text-amber-300">&quot;Node.js&quot;</span><span className="text-purple-400">&#93;</span>,</p>
                <p className="pl-4"><span className="text-sky-400">drivenBy</span>: <span className="text-amber-300">&quot;Clean Code & UX&quot;</span>,</p>
                <p className="pl-4"><span className="text-sky-400">coffeeToCodeRatio</span>: <span className="text-orange-400">1.0</span></p>
                <p>&#125;;</p>
            </div>

            {/* Decorative Blur Backing */}
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/20 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
    );
}
