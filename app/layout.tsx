import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DIGITIZE. — Work Local Result Global | Founder & CEO Madni Silat",
  description:
    "DIGITIZE. — Work Local Result Global. Bespoke digital architecture, distributed cloud systems, and high-performance WebGL applications led by Founder & CEO Madni Silat.",
  keywords: [
    "DIGITIZE",
    "Madni Silat",
    "Work Local Result Global",
    "Software Architecture",
    "WebGL",
    "Three.js",
    "Next.js 14",
    "Full-Stack Engineering",
    "UI/UX Design Systems",
    "Distributed Systems",
  ],
  authors: [{ name: "Madni Silat" }, { name: "DIGITIZE" }],
  openGraph: {
    title: "DIGITIZE. — Work Local Result Global | Founder & CEO Madni Silat",
    description:
      "Full-stack software engineering, bespoke digital architecture, and high-scale web platforms.",
    type: "website",
    locale: "en_US",
    siteName: "DIGITIZE.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIGITIZE. — Work Local Result Global | Founder & CEO Madni Silat",
    description:
      "Full-stack software engineering, bespoke digital architecture, and high-scale web platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <body className="bg-[#0A0A0A] text-zinc-100 antialiased selection:bg-brand-blue/30 selection:text-white" suppressHydrationWarning>
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
