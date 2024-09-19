import Image from "next/image";
import Link from "next/link";
import mainLogo from "@/public/logos/logoMain.svg";

const Navbar = () => {
  return (
    <nav className="p-px gradient-bottom-border fixed top-0 left-0 w-full z-50">
      <div className="custom-nav-gradient text-white py-4 px-8 flex items-center justify-between">
        {/* Left Side - Logo and Tagline */}
        <div className="flex items-center">
          <Image src={mainLogo} alt="Fool Ideas" className="h-8 w-auto mr-4" />{" "}
          {/* Replace with your logo */}
        </div>

        {/* Right Side - Navigation Links */}
        <div className="flex items-center space-x-8 border p-3 px-6 rounded-full border-[#FFFFFF14]">
          <Link href="#" className="hover:text-green-400 text-sm">
            About Us
          </Link>
          <div className="relative group">
            <button className="flex items-center hover:text-green-400 text-sm">
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
          <Link href="#" className="hover:text-green-400 text-sm">
            Reviews
          </Link>
        </div>

        {/* Right Side - Quick Contact Button */}
        <a
          href="#"
          className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
        >
          Quick Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
