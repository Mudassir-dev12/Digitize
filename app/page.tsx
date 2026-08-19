"use client";

import { useState } from "react";
import Preloader from "@/components/sections/Preloader";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
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
    <main className="relative min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col">
      {/* High-Tech Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main Studio Experience */}
      <Navbar />
      <Hero />
      <Marquee />
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
