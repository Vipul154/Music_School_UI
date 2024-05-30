import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.2]">
      <HeroSection />
    </main>
  );
}
