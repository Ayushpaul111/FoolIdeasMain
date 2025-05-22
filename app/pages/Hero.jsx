"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section>
      <style jsx>{`
        .logo-bg-container {
          position: relative;
        }

        .logo-bg-shine {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("/bgLogo.svg");
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          overflow: hidden;
          pointer-events: none;
          -webkit-mask: url("/bgLogo.svg") no-repeat center/contain;
          mask: url("/bgLogo.svg") no-repeat center/contain;
        }

        .logo-bg-shine::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -150%;
          width: 30%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(52, 211, 153, 0.3),
            rgba(16, 185, 129, 0.6),
            rgba(34, 197, 94, 0.8),
            rgba(16, 185, 129, 0.6),
            rgba(52, 211, 153, 0.3),
            transparent
          );
          transform: rotate(45deg);
          animation: logoShine 5s ease-in-out infinite;
          filter: blur(11px);
        }

        @keyframes logoShine {
          0% {
            left: -150%;
          }
          50% {
            left: 120%;
          }
          100% {
            left: 120%;
          }
        }
      `}</style>

      <div className="w-full py-36 bg-[url('/bgGrid.svg')] bg-cover bg-center ">
        <div className="w-[85%] mx-auto h-full flex items-center justify-center logo-bg-container">
          {/* Background Logo with Shine Effect */}
          <div className="logo-bg-shine"></div>
          {/* Content */}
          <div className="relative z-10 text-center px-5">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-play font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-55% to-[#4C685D] to-100% py-8"
            >
              Empowering Your Brand,
              <br />
              Elevating Your Business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-4 font-play text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-3 text-[#B1C8BF]"
            >
              Your strategic partner in crafting compelling campaigns and
              driving measurable results. Let&apos;s turn your vision into
              success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="https://wa.me/+917427983047"
                  target="_blank"
                  className="bg-green-600 px-6 py-3 rounded-full text-white hover:bg-green-700"
                >
                  Quick Contact
                </Link>
              </motion.div>

              <div className="border border-green-600 rounded-full text-white hover:bg-green-700 flex items-center">
                <div className="relative inline-flex group">
                  <motion.div
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-b from-[#059669] via-[#34D399] to-[#112F24] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    data-cal-namespace="15min"
                    data-cal-link="fool-ideas-4gekzz/15min"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    <div className="relative inline-flex items-center justify-center px-5 py-3 text-lg font-bold text-white transition-all duration-200  font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                      Book A Consultation
                      <motion.span
                        animate={{
                          rotate: [0, 15, 0, -15, 0],
                          y: [0, -3, 0, -3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                        className="ml-2"
                      >
                        📅
                      </motion.span>
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Social Icons */}
          <div className="absolute flex flex-col right-4 md:right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-10">
            {[
              {
                href: "https://wa.me/+917427983047",
                src: "/logos/whatsapp.svg",
                alt: "WhatsApp",
              },
              {
                href: "https://www.facebook.com/profile.php?id=61560007932405",
                src: "/logos/facebook-green.svg",
                alt: "Facebook",
              },
              {
                href: "https://www.linkedin.com/company/foolideas/posts/?feedView=all",
                src: "/logos/linkedin.svg",
                alt: "LinkedIn",
              },
              {
                href: "https://www.instagram.com/foolideas/",
                src: "/logos/insta.svg",
                alt: "Instagram",
              },
            ].map((social, index) => (
              <motion.div
                key={social.alt}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.15 }}
                className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]"
              >
                <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                  <Link href={social.href} target="_blank">
                    <Image
                      src={social.src}
                      alt={social.alt}
                      width={5}
                      height={5}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
