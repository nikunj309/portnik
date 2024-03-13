"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Contact from "@/components/Contact";
import Service from "@/components/Service";
import About from "@/components/About";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <About/>
      <ProjectSection/>
      <Service/>
      <Contact/>
    </main>
  );
}
