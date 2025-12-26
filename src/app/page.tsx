"use client";
import { AboutMeSection } from "@/components/AboutMeSection";
import { ConnectSection } from "@/components/ConnectSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import { useRef } from "react";

export default function Home() {
  const clickRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    clickRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <main className="font-sans bg-neutral-900/20">
        <HeroSection onButtonClick={handleScroll} />
        <AboutMeSection />
        <ProjectSection />
        <div ref={clickRef}>
          <ConnectSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
