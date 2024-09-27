"use client";
import Image from "next/image";
import Link from "next/link";
import mainLogo from "@/public/logos/logoMain.svg";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="p-px gradient-bottom-border fixed top-0 left-0 w-full z-50">
      <div className="custom-nav-gradient text-white py-4 md:px-8 px-2 flex flex-wrap gap-y-3 items-center justify-between">
        {/* Left Side - Logo and Tagline */}
        <div className="flex items-center">
          <Image src={mainLogo} alt="Fool Ideas" className="h-8 w-auto mr-4" />{" "}
          {/* Replace with your logo */}
        </div>
        <p
          className="md:hidden"
          onClick={() => {
            setMenu((m) => !m);
          }}
        >
          Menu
        </p>
        {/* Right Side - Navigation Links */}
        <div
          className={`relative md:contents ${menu ? "flex" : "hidden"}  w-full`}
        >
          <div className=" md:flex items-center md:space-x-8 md:border p-3 pl-6 md:rounded-full md:border-[#FFFFFF14]">
            <Link href="#" className="hover:text-green-400 text-sm">
              About Us
            </Link>
            <div className="relative group">
              <button className=" hover:text-green-400 text-sm">
                Services
              </button>
              {/* Dropdown for Services */}
              <div className="absolute left-0 mt-2 w-40 hidden group-hover:block bg-white text-black rounded shadow-md">
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 text-sm"
                >
                  Service 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 text-sm"
                >
                  Service 2
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200 text-sm"
                >
                  Service 3
                </Link>
              </div>
            </div>
            <Link href="#" className="hover:text-green-400 text-sm">
              Our Team
            </Link>
            <Link
              href="#"
              className="md:inline block hover:text-green-400 text-sm"
            >
              Reviews
            </Link>
          </div>
          
          <a
            href="#"
            className="md:static absolute top-2 right-0 bg-green-600 text-white px-4 py-2 h-fit rounded-full hover:bg-green-700"
          >
            Quick Contacts
          </a>
        </div>

        {/* Right Side - Quick Contact Button */}
      </div>
    </nav>
  );
};

export default Navbar;
