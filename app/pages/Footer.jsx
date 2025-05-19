"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";

// Social media links
const SOCIAL_MEDIA_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61560007932405",
  linkedin: "https://www.linkedin.com/company/foolideas/posts/?feedView=all",
  instagram: "https://www.instagram.com/foolideas/",
};

// Marquee component with smooth animation
const MarqueeText = () => (
  <div className="flex items-center space-x-6 min-w-max animate-marquee">
    {Array(10)
      .fill(null)
      .map((_, index) => (
        <div key={index} className="flex items-center space-x-6">
          <Image
            src="/logos/logoMain.svg"
            alt="Foolideas Logo"
            width={200}
            height={80}
            className="object-contain"
          />
          <ArrowUpRight className="h-5 w-5 text-white" />
        </div>
      ))}
  </div>
);

// Social media icons component
const SocialMediaIcons = () => (
  <div className="flex space-x-4">
    {[
      { href: SOCIAL_MEDIA_LINKS.facebook, icon: Facebook, label: "Facebook" },
      { href: SOCIAL_MEDIA_LINKS.linkedin, icon: Linkedin, label: "LinkedIn" },
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
        className="group relative p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
      >
        <Icon
          className="h-5 w-5 text-white group-hover:scale-110 transition-transform"
          strokeWidth={1.5}
        />
      </Link>
    ))}
  </div>
);

// Navigation section component
const FooterNavSection = ({ title, links }) => (
  <div className="space-y-3">
    <h3 className="text-lg font-semibold text-white tracking-wide">{title}</h3>
    <ul className="space-y-2 text-sm">
      {links.map(({ text, href, external }) => (
        <li key={text}>
          <Link
            href={href}
            className="text-gray-300 hover:text-white transition-colors flex items-center group"
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span>{text}</span>
            {external && (
              <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </Link>
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

    let animationFrame;
    const scrollAnimation = () => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 0.5; // Smoother scroll speed
      }
      animationFrame = requestAnimationFrame(scrollAnimation);
    };

    animationFrame = requestAnimationFrame(scrollAnimation);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Marquee Section */}
      {/* <div className="bg-gray-950 py-6 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex whitespace-nowrap"
          style={{ scrollBehavior: "smooth" }}
        >
          <MarqueeText />
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/logos/logoMain.svg"
              alt="Foolideas Logo"
              width={150}
              height={60}
              className="object-contain"
            />
            <p className="text-sm text-gray-400 max-w-xs">
              Empowering businesses with innovative web solutions and creative
              design.
            </p>
            <SocialMediaIcons />
          </div>

          {/* Navigation Sections */}
          <FooterNavSection
            title="Services"
            links={[
              { text: "Social Media Management", href: "#services" },
              { text: "Content Creation", href: "#services" },
              { text: "Performance Marketing & Paid Media", href: "#services" },
              { text: "Search Engine Optimization (SEO)", href: "#services" },
              { text: "Branding and Design", href: "#services" },
              { text: "E-Commerce Marketing", href: "#services" },
              { text: "Influencer Marketing", href: "#services" },
              { text: "Google Ads", href: "#services" },
            ]}
          />
          <FooterNavSection
            title="Company"
            links={[
              { text: "About Us", href: "aboutUs" },
              { text: "Our Services", href: "#services" },
              { text: "Client Reviews", href: "#reviews" },
              { text: "Meet the Team", href: "#team" },
              { text: "Contact Us", href: "#contact" },
            ]}
          />
          <FooterNavSection
            title="Connect"
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

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Foolideas. All rights reserved.</p>
          <p>
            Crafted with {"<3"} by{" "}
            <a
              href="https://ehike.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Ehike
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
