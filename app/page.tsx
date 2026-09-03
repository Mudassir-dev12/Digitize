"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const DynamicSiteBackground = dynamic(() => import("@/components/ui/DynamicSiteBackground"), {
  ssr: false,
});
import Preloader from "@/components/sections/Preloader";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import BentoStatsShowcase from "@/components/sections/BentoStatsShowcase";
import FeaturedHoverShowcase from "@/components/sections/FeaturedHoverShowcase";
import OurServices from "@/components/sections/OurServices";
import ProjectHighlights from "@/components/sections/ProjectHighlights";
import IndustriesWeEmpower from "@/components/sections/IndustriesWeEmpower";
import CollaborationOpportunities from "@/components/sections/CollaborationOpportunities";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen text-zinc-100 flex flex-col bg-[#030508]">
      {/* Dynamic Interactive Studio Background System */}
      <DynamicSiteBackground />

      {/* High-Tech Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main Studio Experience */}
      <Navbar />
      <Hero />
      <BentoStatsShowcase />
      <FeaturedHoverShowcase />
      <OurServices />
      <ProjectHighlights />
      <IndustriesWeEmpower />
      <CollaborationOpportunities />
      <Footer />
    </main>
  );
}

