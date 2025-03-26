"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Facebook, Linkedin, Instagram } from "lucide-react";

// Define social media links as a constant
const SOCIAL_MEDIA_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61560007932405",
  linkedin: "https://www.linkedin.com/company/foolideas/posts/?feedView=all",
  instagram: "https://www.instagram.com/foolideas/",
};

// Separate component for marquee text
const MarqueeText = () => (
  <div className="flex items-center space-x-4 min-w-max animate-marquee bg-[#00120B]">
    {Array(100)
      .fill(null)
      .map((_, index) => (
        <div key={index} className="flex items-center space-x-4">
          {/* <span>call</span>
          <ArrowUpRight className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" /> */}
          <span className="ml-4">
            <div className="w-fit">
              <Image
                src="/logos/logoMain.svg"
                alt="Logo"
                width={250}
                height={100}
              />
            </div>
          </span>
          <ArrowUpRight className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
        </div>
      ))}
  </div>
);

// Separate component for social media icons
const SocialMediaIcons = () => (
  <div className="flex space-x-3 sm:space-x-4">
    {[
      {
        href: SOCIAL_MEDIA_LINKS.facebook,
        icon: Facebook,
        label: "Facebook",
      },
      {
        href: SOCIAL_MEDIA_LINKS.linkedin,
        icon: Linkedin,
        label: "LinkedIn",
      },
      {
        href: SOCIAL_MEDIA_LINKS.instagram,
        icon: Instagram,
        label: "Instagram",
      },
    ].map(({ href, icon: Icon, label }) => (
      <Link
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100 transition-colors cursor-pointer"
      >
        <Icon className="sm:w-4 sm:h-4 text-black" strokeWidth={1.5} />
      </Link>
    ))}
  </div>
);

// Footer navigation section component
const FooterNavSection = ({ title, links }) => (
  <div>
    <h3 className="text-base sm:text-lg mb-4 sm:mb-6 text-black font-bold cursor-pointer">
      {title}
    </h3>
    <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base">
      {links.map(({ text, href, external }) => (
        <li key={text} className="flex items-center">
          <Link
            href={href}
            className="text-[#333] hover:text-black transition-colors  cursor-pointer"
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {text}
          </Link>
          {external && <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />}
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAnimation = () => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const animationInterval = setInterval(scrollAnimation, 1);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <footer className="w-full">
      {/* Top banner with "Book a call" */}
      <div className="bg-[#00120B] text-white py-8 px-6 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex items-center space-x-4 text-3xl sm:text-4xl md:text-5xl font-medium whitespace-nowrap overflow-x-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          <MarqueeText />
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-[#cdf7c8] px-6 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 rounded-t-[2rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 ">
          {" "}
          {/* rounded-t-[2rem] added to the div */}
          <FooterNavSection
            title="Services"
            links={[
              { text: "Webflow development", href: "#" },
              { text: "Web design (UI/UX)", href: "#" },
              { text: "Webflow SEO", href: "#" },
              { text: "Webflow Migrations", href: "#" },
              { text: "Webflow Integration", href: "#" },
              { text: "Maintenance and Support", href: "#" },
            ]}
          />
          <FooterNavSection
            title="Company"
            links={[
              { text: "About", href: "aboutUs" },
              { text: "Services", href: "#services" },
              { text: "Reviews", href: "#reviews" },
              { text: "The Team", href: "#team" },
              { text: "Contact", href: "#contact" },
            ]}
          />
          <FooterNavSection
            title="Socials"
            links={[
              {
                text: "LinkedIn",
                href: SOCIAL_MEDIA_LINKS.linkedin,
                external: true,
              },
              {
                text: "Facebook",
                href: SOCIAL_MEDIA_LINKS.facebook,
                external: true,
              },
              {
                text: "Instagram",
                href: SOCIAL_MEDIA_LINKS.instagram,
                external: true,
              },
            ]}
          />
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-12 md:mt-16">
          <div className="text-xs sm:text-sm text-[#333] mb-2 sm:mb-0">
            © {new Date().getFullYear()} Foolideas
          </div>
          <div className="text-xs sm:text-sm text-[#333] mb-4 sm:mb-0">
            Made with {"<3"} by{" "}
            <a
              href="https://ehike.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Ehike
            </a>
          </div>
          <SocialMediaIcons />
        </div>
      </div>
    </footer>
  );
}
