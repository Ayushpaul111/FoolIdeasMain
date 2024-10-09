import React from "react";
import Image from "next/image";
const Service = ({items}) => {
  return (
    <div className="flex justify-center mt-8 flex-wrap">
      {/* Social */}
      
      {items.map((item, index) => {
        return (
          <div className="relative w-[400px] h-[450px] mx-3 my-3  border-[1px] border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-90% bg-opacity-30">
            <div className="absolute h-[100%] w-[100%] bg-[url('/services/bggrid.png')]"></div>
            <div className="m-5 relative h-[90%] ">
              <div className="w-[100px] h-[100px] ">
                <Image src={item.image} height={100} width={100} />
              </div>

              <div className="text-start ">
                <p className="text-lg sm:text-xl md:text-2xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                  {item.service}
                </p>
                <p className="text-[#B1C8BF] text-base sm:text-lg md:text-xl mt-2">
                  {item.description}
                </p>
              </div>
              <a
                href=""
                className="bg-[#001C10] rounded-full text-sm sm:text-base md:text-lg px-4 py-2 border-[1px] border-green-300 text-white absolute bottom-0 left-0"
              >
                Learn More
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
