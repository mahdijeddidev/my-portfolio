interface SocialItem {
    name: string;
    href: string;
    icon: React.ReactNode;
}

interface SocialLinksProps {
    links: SocialItem[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
    return (
        <div className="flex items-center gap-5">
            {links.map((social) => {
                const isWebUrl =
                    social.href.startsWith("http://") ||
                    social.href.startsWith("https://");
                // const isMailto = social.href.startsWith("mailto:");

                return (
                    <a
                        key={social.name}
                        href={social.href}
                        target={isWebUrl ? "_blank" : '_self'}
                        rel={isWebUrl ? "noopener noreferrer" : undefined}
                        title={social.name}
                        className="text-2xl text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
                    >
                        {social.icon}
                    </a>
                );
            })}
        </div>
    );
}
