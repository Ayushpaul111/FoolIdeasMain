"use client"
import About from "./pages/About";
import HeroSection from "./pages/Hero";
import ScrollCompanies from "./pages/ScrollCompanies";
import Story from "./pages/Story";
import Vision from "./pages/Vision";
import Why from "./pages/Why";
import Services from "./pages/Services";
import TeamLead from "./pages/TeamLead";
export default function Home() {
  return (
    <main className="bg-[#00120B] pb-28 w-[100vw] overflow-hidden">
      <HeroSection/>
      <ScrollCompanies/>
      <About/>
      <Story/>
      <Vision/>
      <Why/>
      <Services/>
      <TeamLead/>
    </main>
  );
  
}
