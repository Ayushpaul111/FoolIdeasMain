"use client";
import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
const Story = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    console.log("In View ", isInView);
  }, [isInView]);
  return (
    <div className="flex flex-wrap justify-center gap-16  text-[#B1C8BF] mb-28 sm:mx-10 mx-5 mt-36">
      <div className="lg:w-[50%]  border-[1px] border-[#007443A3] rounded-lg bg-[#001C10]">
        <div className="sm:mx-7 m-5 my-8">
          {" "}
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold  bg-clip-text text-transparent bg-gradient-to-br from-white from-40%  to-green-800 to-70%">
            Our Story
          </p>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            With a background in marketing and a passion for creativity,
            Bireswar Das established Foolideas to bridge the gap between
            brilliant ideas and successful marketing campaigns. Over the past 5
            years, we have grown into a trusted partner for businesses seeking
            to enhance their brand and drive growth.
          </p>
        </div>
      </div>
      <div className="grid  grid-cols-2 lg:w-[40%] sm:w-[80%] w-auto sm:mx-4 gap-3 ">
        <div className="  ">
          <div>
            <p
              ref={ref}
              className=" text-[35px] font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white from-40%  to-green-800 to-70%"
            >
              {isInView && <CountUp end={200} />}+
            </p>
            <p>Completed Projects</p>
          </div>
        </div>
        <div className=" ">
          <div>
            <p className=" text-[35px] font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white from-40%  to-green-800 to-70%">
              {isInView && <CountUp end={8} />}+
            </p>
            <p>Service Provided</p>
          </div>
        </div>
        <div className="">
          <div>
            <p className=" text-[35px] font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white from-40%  to-green-800 to-70%">
              {isInView && <CountUp end={95} />}+
            </p>
            <p>Client Reviews</p>
          </div>
        </div>
        <div className=" ">
          <div>
            <p className=" text-[35px] font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white from-40%  to-green-800 to-70%">
              24/7
            </p>
            <p>Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
