import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import SectionFive from "@/components/SectionFive";
import SectionSix from "@/components/SectionSix";
import SectionSeven from "@/components/SectionSeven";

export default function Home() {
  return (
    <main className="bg-[#fbf7ef]">
      <Navbar />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </main>
  );
}
