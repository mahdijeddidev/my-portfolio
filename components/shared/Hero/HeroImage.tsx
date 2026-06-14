import Image from "next/image";

interface HeroImageProps {
    src: string;
    alt: string;
}

export default function HeroImage({ src, alt }: HeroImageProps) {
    return (
        <div className="relative order-1 lg:order-2 flex justify-center items-center group">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] border border-border/40">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 256px, 320px"
                />
            </div>
            {/*  frame overlay */}
            <div className="absolute -inset-2 rounded-2xl border border-primary/20 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none" />
        </div>
    );
}
