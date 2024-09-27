import React from "react";

const Story = () => {
  return (
    <div className="flex flex-wrap justify-center gap-16  text-[#B1C8BF] mb-28">
      <div className="sm:max-w-[600px] sm:min-w-[500px] w-[300px] border-[1px] border-[#007443A3] rounded-lg bg-[#001C10]">
        <p className="text-[25px] font-medium mx-5 mt-5 mb-2 bg-clip-text text-transparent bg-gradient-to-br from-white from-40%  to-green-800 to-70%">
          Our Story
        </p>
        <p className="mx-5 mb-4">
          With a background in marketing and a passion for creativity, Bireswar
          Das established Foolideas to bridge the gap between brilliant ideas
          and successful marketing campaigns. Over the past 5 years, we have
          grown into a trusted partner for businesses seeking to enhance their
          brand and drive growth.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:max-w-[600px] sm:min-w-[500px] w-[300px] mx-4 gap-y-3">
        <div className="md:max-w-[150px] w-auto h-[100px] flex items-center">
          <div><p className=" text-[35px] font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white from-40%  to-green-800 to-70%">200+</p>
          <p >Completed Projects</p></div>
        </div>
        <div className="max-w-[150px] h-[100px] flex items-center  ">
          <div><p className=" text-[35px] font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white from-40%  to-green-800 to-70%">8+</p>
          <p >Service Provided</p></div>
        </div><div className="max-w-[150px] h-[100px] flex items-center  ">
          <div><p className=" text-[35px] font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white from-40%  to-green-800 to-70%">95+</p>
          <p >Client Reviews</p></div>
        </div><div className="max-w-[150px] h-[100px] flex items-center  ">
          <div><p className=" text-[35px] font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white from-40%  to-green-800 to-70%">24/7</p>
          <p >Customer Support</p></div>
        </div>
      </div>
    </div>
  );
};

export default Story;
