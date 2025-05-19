"use client";
import About from "./pages/About";
import HeroSection from "./pages/Hero";
import ScrollCompanies from "./pages/ScrollCompanies";
import Story from "./pages/Story";
import Vision from "./pages/Vision";
import Why from "./pages/Why";
import Services from "./pages/Services";
import TeamLead from "./pages/TeamLead";
import Team from "./pages/Team";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Consult from "./pages/Consult";
import Footer from "./pages/Footer";

export default function Home() {
  return (
    <main className="bg-[#00120B] w-full overflow-x-hidden">
      <HeroSection />
      <ScrollCompanies />
      <About />
      <Story />
      <Vision />
      <Why />
      <Services />
      <TeamLead />
      <Team />
      <Reviews />
      <Contact />
      <Consult />
      <Footer />
    </main>
  );
}
