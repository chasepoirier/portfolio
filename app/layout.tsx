import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import PlausibleProvider from "next-plausible";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chase Poirier | Fullstack Software Engineer | Serial Creator",
  description: "I build things and talk about it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="chasepoirier.com" />
      </head>
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
