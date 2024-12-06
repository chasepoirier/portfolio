import type { Metadata } from "next";
import { Barlow, Fira_Code } from "next/font/google";
import "./globals.css";

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
  title: "MVP Accelerator | Custom MVP Development in 2 Weeks for Startups",
  description:
    "Launch your MVP in just 2 weeks with our MVP Accelerator. We build fully functional, custom-designed MVPs with essential features like user authentication, payment integration, and mobile optimization. Perfect for startups looking to go from idea to market fast, without sacrificing quality or scalability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} ${secondary.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
