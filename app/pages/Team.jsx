"use client";
import React, { useEffect, useRef } from "react";
import { InfiniteMovingTeam } from "../../components/ui/infinite-moving-team";
import { motion } from "framer-motion";

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
      name: "Ayush Paul",
      image: "/team_images/AyushPaul.png",
      role: "Developer",
    },
    {
      name: "Sudip Adhikary",
      image: "/team_images/SudipAdhikary.jpg",
      role: "Photographer",
    },
    {
      name: "Abir Deb",
      image: "/team_images/AbirDeb.webp",
      role: "Video Editor",
    },
    {
      name: "Debarati Bhattacharya",
      image: "/team_images/DebaratiBhattacharya.jpg",
      role: "Content Writer",
    },
  ];

  // Animation variants for the heading elements
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Create a staggered reveal for the team section
  const teamContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="my-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      id="team"
    >
      <motion.h1
        className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%"
        variants={headerVariants}
      >
        Our Expert Team
      </motion.h1>

      <motion.p
        className="font-play mt-6 text-center text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]"
        variants={subtitleVariants}
      >
        Guiding Your Success Every Step of the Way
      </motion.p>

      <motion.div
        variants={teamContainerVariants}
        className="w-full overflow-hidden"
      >
        <InfiniteMovingTeam items={items} className="mt-8" speed="slow" />
      </motion.div>
    </motion.div>
  );
};

export default Team;
