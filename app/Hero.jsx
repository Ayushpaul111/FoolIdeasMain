"use client";

import React from "react";
import Image from "next/image";
import bgLogo from "@/public/bgLogo.svg";

const HeroSection = () => {
  // const imageStyle = {
  //   position: "absolute",
  //   width: "1240px",
  //   left: "calc(50% - 1240px/2)",
  //   top: "19%",
  //   bottom: "17.37%",
  // };

  return (
    <section className="relative flex flex-col items-center justify-centerh-screen text-white">
      <div className="h-[50rem] w-full dark:bg-grid-white/[0.1] bg-grid-black/[0.1]  relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        {/* Background */}
        <div className="absolute px-48 py-32 h-[131px] w-[533px] bg-[#19A069] opacity-50 rounded-full top-[104px] flex justify-center blur-3xl"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src={bgLogo}
            alt="Background"
            className="opacity-100 mx-auto"
            // style={imageStyle}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-55% to-[#4C685D] to-100% py-8">
            Empowering Your Brand,
            <br />
            Elevating Your Business
          </h1>
          <p className="mt-4 text-lg max-w-xl mx-auto text-[#B1C8BF]">
            Your strategic partner in crafting compelling campaigns and driving
            measurable results. Let’s turn your vision into success.
          </p>
          <div className="mt-8 flex space-x-4 justify-center">
            {/* <Link
              href="#"
              className="bg-green-600 px-6 py-3 rounded-full text-white hover:bg-green-700"
              >
              Quick Contact
              </Link>
              <Link
              href="#"
              className="border border-green-600 px-6 py-3 rounded-full text-white hover:bg-green-700 flex items-center"
              >
              Book A Consultation
              <span className="ml-2">📅</span>
              </Link> */}
          </div>
        </div>

        {/* Social Icons */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-10">
          {/* <Link
            href="#"
            className="bg-green-600 p-2 rounded-full hover:bg-green-700"
            >
            <Image src="/path/to/whatsapp-icon.svg" alt="WhatsApp" />
            </Link>
          <Link
          href="#"
            className="bg-green-600 p-2 rounded-full hover:bg-green-700"
          >
          <Image src="/path/to/telegram-icon.svg" alt="Telegram" />
          </Link>
          <Link
          href="#"
          className="bg-green-600 p-2 rounded-full hover:bg-green-700"
          >
            <Image src="/path/to/linkedin-icon.svg" alt="LinkedIn" />
            </Link>
            <Link
            href="#"
            className="bg-green-600 p-2 rounded-full hover:bg-green-700"
            >
            <Image src="/path/to/instagram-icon.svg" alt="Instagram" />
            </Link> */}
        </div>
      </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </section>
  );
};

export default HeroSection;
