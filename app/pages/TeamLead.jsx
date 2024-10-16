import React from "react";
import Image from "next/image";
import Link from "next/link";
const TeamLead = () => {
  return (
    <div className="text-center sm:m-10 m-5 ">
      <h1 className=" text-3xl sm:text-4xl md:text-5xl  font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
        Our Team Lead
      </h1>
      <p className="font-play mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
        &ldquo;Be together Build together&rdquo;
      </p>
      {/* Leader Card */}

      <div className=" mt-8  border-[1px] flex lg:flex-row flex-col  min-h-[500px]  border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-9  0%">
        <div className=" sm:m-16 m-5  lg:w-[55%]   flex-shrink-0 h-fit overflow-hidden ">
          <div className="text-start   ">
            <p className="text-3xl sm:text-4xl md:text-5xl mb font-semibold  bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
              Bireswar das
            </p>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-[#B1C8BF] ">
              Founder & CEO
            </p>
            <p className="text-[#B1C8BF] text-base sm:text-lg md:text-xl mt-5">
              Bireswar is a seasoned marketing specialist with over 7 years of
              experience in driving digital marketing strategies for top brands.
              He excels in crafting compelling campaigns that resonate with
              target audiences and boost brand visibility. With a deep
              understanding of market trends and a creative approach to
              problem-solving, Bireswar leads our marketing team with a passion
              for innovation and results. His expertise spans content marketing,
              social media strategy, and data-driven decision-making, ensuring
              our clients achieve measurable growth and success.
            </p>
            <div className="flex mt-5 gap-10">
              <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
                <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                  <Link href="https://www.linkedin.com/in/bireswar-das-78378a315/">
                    <img
                      src="/logos/linkedin.svg"
                      alt="Linkedin"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </Link>
                </div>
              </div>
              <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
                <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                  <Link href="https://www.instagram.com/bireswar07/">
                    <img
                      src="/logos/insta.svg"
                      alt="Instagram"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  relative overflow-hidden">
          <div className="w-[100%] lg:absolute relative lg:bottom-[-100px]">
            <Image
              src="/team_images/Bireswar.png"
              alt="Bireswar Das"
              width={400}
              height={200}
              className="m-auto sm:w-[400px] w-[250px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamLead;
