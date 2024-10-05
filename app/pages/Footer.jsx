import React from "react";

import Image from "next/image";
const Footer = () => {
  return (
    <section className="sm:m-10 sm:mt-[150px]  m-5 mt-36">
      <div className="grid sm:grid-cols-2 grid-cols-1 " >
        <div className="sm:m-5 grid grid-cols-3 sm:gap-y-5 gap-y-3">
          <p className="text-sm sm:text-lg md:text-xl">Company</p>
          <p className="text-sm sm:text-lg md:text-xl">Company</p>
          <p className="text-sm sm:text-lg md:text-xl">Company</p>
          <p className="text-sm sm:text-lg md:text-xl text-[#B1C8BF]">About Us</p>
          <p className="text-sm sm:text-lg md:text-xl text-[#B1C8BF]">About Us</p>
          <p className="text-sm sm:text-lg md:text-xl text-[#B1C8BF]">About Us</p>
          <p className="text-sm sm:text-lg md:text-xl text-[#B1C8BF]">Careers</p>
          <p className="text-sm sm:text-lg md:text-xl text-[#B1C8BF]">Careers</p>
          <p className="text-sm sm:text-lg md:text-xl text-[#B1C8BF]">Careers</p>
          <p className="text-sm sm:text-lg md:text-xl text-[#B1C8BF]">Contact Us</p>
          <p className="text-sm sm:text-lg md:text-xl text-[#B1C8BF]">Contact Us</p>
          <p className="text-sm sm:text-lg md:text-xl text-[#B1C8BF]">Contact Us</p>
        </div>
        <div className=" sm:m-5 mt-10 ">
          <div className="flex sm:float-end">
            <div className="w-fit ">
              <Image
                src="/logos/logoMain.svg"
                alt="Logo"
                width={250}
                height={100}
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
