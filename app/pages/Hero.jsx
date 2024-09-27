"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import bgLogo from "@/public/bgLogo.svg";
import bgGrid from "@/public/bgGrid.svg";
import insta from "@/public/logos/insta.svg";
import whatsapp from "@/public/logos/whatsapp.svg";
import linkedin from "@/public/logos/linkedin.svg";
import telegram from "@/public/logos/telegram.svg";
// import bg from '../../public/bgLogo.svg'
const HeroSection = () => {
  return (
    <section>
        <div className="w-full h-screen bg-[url('/bgGrid.svg')] bg-cover bg-center"> 
            <div className="mx-auto bg-[url('/bgLogo.svg')] w-[85%] mx-auto bg-contain h-full bg-no-repeat bg-center flex items-center justify-center">

              

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-play font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-55% to-[#4C685D] to-100% py-8">
            Empowering Your Brand,
            <br />
            Elevating Your Business
          </h1>
          <p className="mt-4 font-play text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
            Your strategic partner in crafting compelling campaigns and driving
            measurable results. Let’s turn your vision into success.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center">
            <Link
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
            </Link>
          </div>
        </div>

      
        {/* Social Icons */}
        <div className="absolute flex flex-col right-4 md:right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-10">
          <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
            <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
              <Link href="#">
                <Image
                  src={whatsapp}
                  alt="WhatsApp"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </Link>
            </div>
          </div>
          <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
            <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
              <Link href="#">
                <Image
                  src={telegram}
                  alt="Telegram"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </Link>
            </div>
          </div>
          <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
            <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
              <Link href="#">
                <Image
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </Link>
            </div>
          </div>
          <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
            <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
              <Link href="#">
                <Image
                  src={insta}
                  alt="Instagram"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </Link>
            </div>
          </div>
        </div>
            </div>
        </div>

    </section>
  );
};

export default HeroSection;
