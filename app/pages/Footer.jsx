import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <section className="sm:m-10 sm:mt-[150px]  m-5 mt-36 text-sm sm:text-lg md:text-xl">
      <div className="grid sm:grid-cols-2 grid-cols-1 ">
        <div className="sm:m-5 grid grid-cols-3 sm:gap-y-5 gap-y-3">
          <p className="text-white">Company</p>
          <p className="text-white">Company</p>
          <p className="text-white">Company</p>
          <p className="text-[#B1C8BF]">About Us</p>
          <p className=" text-[#B1C8BF]">About Us</p>
          <p className=" text-[#B1C8BF]">About Us</p>
          <p className=" text-[#B1C8BF]">Careers</p>
          <p className=" text-[#B1C8BF]">Careers</p>
          <p className=" text-[#B1C8BF]">Careers</p>
          <p className=" text-[#B1C8BF]">Contact Us</p>
          <p className=" text-[#B1C8BF]">Contact Us</p>
          <p className=" text-[#B1C8BF]">Contact Us</p>
        </div>
        <div className=" sm:m-5 mt-10 ">
          <div className="flex sm:float-end gap-y-5 flex-col">
            <div className="w-fit ">
              <Image
                src="/logos/logoMain.svg"
                alt="Logo"
                width={250}
                height={100}
              />
            </div>

            <div className="flex flex-row sm:justify-end gap-3 mb-10 ">
            <Link href='/'><Image src='/logos/linkedinfooter.svg' width={30} height={30} alt="Insta"  className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]"/></Link>
            <Link href='/'><Image src='/logos/instafooter.svg' width={30} height={30} alt="Insta"   className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]"/></Link>
            <Link href='/'><Image src='/logos/facebookfooter.svg' width={30} height={30} alt="Insta"   className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]"/></Link>
            <Link href='/'><Image src='/logos/youtubefooter.svg' width={30} height={30} alt="Insta"  className="sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]"/></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 sm:m-5 sm:mb-0 mb-0 text-[#B1C8BF]">
        <p>Terms & Conditions </p> <p>Privacy Policy</p>
      </div>
    </section>
  );
};

export default Footer;
