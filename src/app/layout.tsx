import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FocusGuide",
  description: "Gérez votre agenda, vos projets et vos tâches dans un seul outil. Simple. Puissant. Fait pour vous.",
  icons: {
    icon: "/logo/icon_black_bg_green.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
