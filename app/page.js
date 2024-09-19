"use client"
import About from "./pages/About";
import HeroSection from "./pages/Hero";
import ScrollCompanies from "./pages/ScrollCompanies";

export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <ScrollCompanies/>
      <About/>
    </main>
  );
  
}
