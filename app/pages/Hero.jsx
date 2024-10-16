"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="w-full py-36 bg-[url('/bgGrid.svg')] bg-cover bg-center">
        <div className=" bg-[url('/bgLogo.svg')] w-[85%] mx-auto bg-contain h-full bg-no-repeat bg-center flex items-center justify-center">
          {/* Content */}
          <div className="relative z-10 text-center px-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-play  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-55% to-[#4C685D] to-100% py-8">
              Empowering Your Brand,
              <br />
              Elevating Your Business
            </h1>
            <p className="mt-4 font-play text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-3 text-[#B1C8BF]">
              Your strategic partner in crafting compelling campaigns and
              driving measurable results. Let’s turn your vision into success.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center">
              <Link
                href="https://wa.me/+917427983047"
                target="_blank"
                className="bg-green-600 px-6 py-3 rounded-full text-white hover:bg-green-700"
              >
                Quick Contact
              </Link>

              <Link
                href="https://wa.me/+917427983047"
                target="_blank"
                className="border border-green-600  rounded-full text-white hover:bg-green-700 bg-darkGreen flex items-center"
              >
                <div className="relative inline-flex group">
                  <div className="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-b from-[#059669] via-[#34D399] to-[#112F24] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative inline-flex items-center justify-center px-5 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                    Learn More
                    {/* <span className="ml-2">📅</span> */}
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="absolute flex flex-col right-4 md:right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-10">
            <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
              <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                <Link href="https://wa.me/+917427983047" target="_blank">
                  <Image
                    src="/logos/whatsapp.svg"
                    alt="WhatsApp"
                    width={5}
                    height={5}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </Link>
              </div>
            </div>
            <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
              <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                <Link
                  href="https://www.facebook.com/profile.php?id=61560007932405"
                  target="_blank"
                >
                  <Image
                    src="/logos/facebook-green.svg"
                    alt="Facebook"
                    width={5}
                    height={5}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-md"
                  />
                </Link>
              </div>
            </div>
            <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
              <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                <Link
                  href="https://www.linkedin.com/company/foolideas/posts/?feedView=all"
                  target="_blank"
                >
                  <Image
                    src="/logos/linkedin.svg"
                    alt="LinkedIn"
                    width={5}
                    height={5}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </Link>
              </div>
            </div>
            <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
              <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                <Link
                  href="https://www.instagram.com/foolideas/"
                  target="_blank"
                >
                  <Image
                    src="/logos/insta.svg"
                    alt="Instagram"
                    width={5}
                    height={5}
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
