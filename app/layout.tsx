import "./globals.css";

export const metadata = {
    title: {
        template: "%s | Mahdi Jeddi",
        default: "Mahdi Jeddi | web Developer",
    },
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
