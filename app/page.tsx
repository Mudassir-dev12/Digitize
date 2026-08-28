"use client";

import { useState } from "react";
import Preloader from "@/components/sections/Preloader";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StatsCounter from "@/components/sections/StatsCounter";
import FeaturedHoverShowcase from "@/components/sections/FeaturedHoverShowcase";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#060913] subtle-grid text-zinc-100 flex flex-col">
      {/* High-Tech Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main Studio Experience */}
      <Navbar />
      <Hero />
      <StatsCounter />
      <FeaturedHoverShowcase />
      <About />
      <Services />
      <Work />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
