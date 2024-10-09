"use client";
import React from "react";
import { InfiniteMovingTeam } from "../../components/ui/infinite-moving-team";

const Team = () => {
  const items = [
    {
      name: "Chandrika Shil",
      image: "/team_images/ChandrikaShil.jpg",
      role: "Voice Dubbing Artist",
    },
    {
      name: "Md Imon Hossen",
      image: "/team_images/MDImonHossen.png",
      role: "Graphic Designer",
    },
    {
      name: "Sudip Adhikary",
      image: "/team_images/SudipAdhikary.jpg",
      role: "Photographer",
    },
    {
      name: "Mrinmoy Sarkar",
      image: "/team_images/MrinmoySarkar.jpg",
      role: "Video Editor",
    },
    {
      name: "Debarati Bhattacharya",
      image: "/team_images/DebaratiBhattacharya.jpg",
      role: "Content Writer",
    },
    
  ];
  return (
    <div className=" my-32">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl  font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
        Our Expert Team
      </h1>
      <p className="font-play mt-6 text-center text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
        Guiding Your Success Every Step of the Way
      </p>

      <InfiniteMovingTeam items={items} className="mt-8" speed="fast" />
    </div>
  );
};

export default Team;
