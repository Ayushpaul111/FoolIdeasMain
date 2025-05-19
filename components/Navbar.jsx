"use client";
import Image from "next/image";
import Link from "next/link";
import mainLogo from "../public/logos/logoMain.svg";
import { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const Navbar = () => {
  const windowSize = 914;
  const [menu, setMenu] = useState(false);

  // Calendar API setup
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  // Close mobile menu on wider screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= windowSize) {
        setMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle smooth scrolling and close mobile menu
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);

    // Always close the mobile menu when a link is clicked
    setMenu(false);

    if (targetElement) {
      // Scroll smoothly
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="gradient-bottom-border fixed top-0 left-0 w-full z-50">
      <div className="custom-nav-gradient text-white py-4 md:px-8 px-4 flex flex-wrap gap-y-3 items-center justify-between">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={mainLogo} alt="Fool Ideas" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute h-0.5 w-full bg-white rounded-lg transform transition-all duration-300 ease-in-out ${
                menu ? "rotate-45 top-2" : "top-0"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-full bg-white rounded-lg transform transition-all duration-300 ease-in-out ${
                menu ? "opacity-0" : "top-2"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-full bg-white rounded-lg transform transition-all duration-300 ease-in-out ${
                menu ? "-rotate-45 top-2" : "top-4"
              }`}
            ></span>
          </div>
        </button>

        {/* Navigation Links Container - Centered on Larger Screens */}
        <div
          className={`w-full md:w-auto md:flex md:items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 transition-all duration-300 ease-in-out overflow-hidden md:overflow-visible ${
            menu ? "max-h-96 mt-4" : "max-h-0 md:max-h-96"
          }`}
        >
          <div className="md:flex items-center md:space-x-8 md:border p-3 pl-6 pr-6 md:rounded-full md:border-[#FFFFFF14] md:bg-transparent">
            <a
              href="#aboutUs"
              onClick={(e) => handleScrollTo(e, "#aboutUs")}
              className="nav-link block py-3 md:py-0 hover:text-green-400 text-base font-medium transition-colors duration-200 relative"
            >
              About us
              <span className="nav-underline md:hidden"></span>
            </a>

            <a
              href="#services"
              onClick={(e) => handleScrollTo(e, "#services")}
              className="nav-link block py-3 md:py-0 hover:text-green-400 text-base font-medium transition-colors duration-200 relative"
            >
              Services
              <span className="nav-underline md:hidden"></span>
            </a>

            <a
              href="#team"
              onClick={(e) => handleScrollTo(e, "#team")}
              className="nav-link block py-3 md:py-0 hover:text-green-400 text-base font-medium transition-colors duration-200 relative"
            >
              Our team
              <span className="nav-underline md:hidden"></span>
            </a>

            <a
              href="#reviews"
              onClick={(e) => handleScrollTo(e, "#reviews")}
              className="nav-link block py-3 md:py-0 hover:text-green-400 text-base font-medium transition-colors duration-200 relative"
            >
              Reviews
              <span className="nav-underline md:hidden"></span>
            </a>

            {/* Quick Contacts Button Inside Mobile Menu */}
            <button
              className="block md:hidden bg-green-600 text-white px-4 py-2 md:rounded-full rounded-lg hover:bg-green-700 transition-colors duration-200 mt-2 w-full text-base font-medium"
              data-cal-namespace="15min"
              data-cal-link="fool-ideas-4gekzz/15min"
              data-cal-config='{"layout":"month_view"}'
              onClick={() => setMenu(false)}
            >
              Quick contacts
            </button>
          </div>
        </div>

        {/* Quick Contacts Button - Right Side on Larger Screens */}
        <div className="hidden md:block md:ml-auto">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200"
            data-cal-namespace="15min"
            data-cal-link="fool-ideas-4gekzz/15min"
            data-cal-config='{"layout":"month_view"}'
            onClick={() => setMenu(false)}
          >
            Quick Contacts
          </button>
        </div>
      </div>

      {/* Add the CSS for the animated underline in mobile view */}
      <style jsx global>{`
        @media (max-width: 913px) {
          .nav-link {
            position: relative;
            display: inline-block;
            width: 100%;
            text-align: left; /* Adjust to center if preferred */
          }

          .nav-underline {
            position: absolute;
            bottom: 8px;
            left: 0;
            width: 0;
            height: 3px; /* Thicker underline */
            background-color: #4ade80; /* green-400 */
            transition: width 0.3s ease;
            display: block;
          }

          .nav-link:hover .nav-underline {
            width: 100%;
          }
        }

        html {
          scroll-behavior: smooth;
        }

        @media (min-width: 914px) {
          .custom-nav-gradient {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
