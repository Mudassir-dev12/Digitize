import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import SoundController from "@/components/ui/SoundController";

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
  title: "DIGITIZE STUDIO — Digital Architecture & 3D Engineering Agency",
  description:
    "We engineer digital flagships, distributed systems, and interactive 3D WebGL experiences with mathematical precision and uncompromising design standards.",
  keywords: [
    "Digital Agency",
    "Software House",
    "WebGL",
    "Three.js",
    "Next.js 14",
    "Full-Stack Engineering",
    "UI/UX Design Systems",
    "Distributed Systems",
    "Creative Technology",
  ],
  authors: [{ name: "Digitize Studio" }],
  openGraph: {
    title: "DIGITIZE STUDIO — Digital Architecture & 3D Engineering Agency",
    description:
      "Bespoke digital architecture, distributed cloud systems, and high-performance WebGL applications.",
    type: "website",
    locale: "en_US",
    siteName: "Digitize Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIGITIZE STUDIO — Digital Architecture & 3D Engineering Agency",
    description:
      "Bespoke digital architecture, distributed cloud systems, and high-performance WebGL applications.",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-[#0A0A0A] text-zinc-100 antialiased selection:bg-brand-blue/30 selection:text-white">
        <SmoothScrollProvider>
          <CustomCursor />
          <SoundController />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
