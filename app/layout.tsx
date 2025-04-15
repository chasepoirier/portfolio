import type { Metadata } from "next";
import { Barlow, Fira_Code } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Layout } from "@/components/Layout";

const font = Barlow({
  subsets: ["latin"],
  variable: "--font-main",
  preload: true,
  // weight: ["400", "300", "800", "900", "700"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const secondary = Fira_Code({
  subsets: ["latin"],
  variable: "--font-secondary",
  preload: true,
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title:
    "Chase Poirier | Software Engineer | Agency Founder | Outdoor Enthusiast",
  description: "Building the software for creator businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`${font.variable} ${secondary.variable} antialiased flex h-full bg-zinc-50 dark:bg-black`}
      >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
