import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionTwo from "@/components/SectionTwo";

export default function Home() {
  return (
    <main className="bg-[#fbf7ef]">
      <Navbar />
      <HeroSection />
      <SectionTwo />
    </main>
  );
}
