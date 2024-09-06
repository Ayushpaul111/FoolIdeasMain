import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-darkGreen text-white py-4 px-8 flex items-center justify-between">
      {/* Left Side - Logo and Tagline */}
      <div className="flex items-center">
        {/* <img src="/logo.svg" alt="Fool Ideas" className="h-8 w-auto mr-4" />{" "} */}
        {/* Replace with your logo */}
        <h1 className="text-xl font-bold">Fool ideas</h1>
      </div>

      {/* Right Side - Navigation Links */}
      <div className="flex items-center space-x-8">
        <Link href="#" className="hover:text-green-400">
          About Us
        </Link>
        <div className="relative group">
          <button className="flex items-center hover:text-green-400">
            Services
          </button>
          {/* Dropdown for Services */}
          <div className="absolute left-0 mt-2 w-40 hidden group-hover:block bg-white text-black rounded shadow-md">
            <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
              Service 1
            </Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
              Service 2
            </Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
              Service 3
            </Link>
          </div>
        </div>
        <Link href="#" className="hover:text-green-400">
          Our Team
        </Link>
        <Link href="#" className="hover:text-green-400">
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
    </nav>
  );
};

export default Navbar;
