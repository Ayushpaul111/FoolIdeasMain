import React from "react";
import Image from "next/image";
import Link from "next/link";

const TeamLead = () => {
  return (
    <div className="text-center sm:m-10 m-5" id="team">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
        Our Team Lead
      </h1>
      <p className="font-play mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
        &ldquo;Be together Build together&rdquo;
      </p>

      {/* Leader Card */}
      <div className="mt-8 border-[1px] flex flex-col xl:flex-row border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-90% card-shine overflow-hidden">
        {/* Text Content */}
        <div className="sm:m-16 m-5 xl:w-[60%] flex-shrink-0 relative z-10">
          <div className="text-start">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80% leading-tight">
              Bireswar das
            </p>
            <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl lg:text-2xl text-[#B1C8BF]">
              Founder & CEO
            </p>
            <p className="text-[#B1C8BF] text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-5 leading-relaxed">
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

            {/* Social Links */}
            <div className="flex mt-4 sm:mt-5 gap-6 sm:gap-10">
              <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
                <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                  <Link href="https://www.linkedin.com/in/bireswar-das-78378a315/">
                    <img
                      src="/logos/linkedin.svg"
                      alt="Linkedin"
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
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
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="xl:w-[40%] w-full flex items-end justify-center xl:justify-end relative overflow-hidden">
          <div className="xl:absolute xl:bottom-0 xl:right-0 relative flex justify-center xl:justify-end w-full">
            <Image
              src="/team_images/biruNew.webp"
              alt="Bireswar Das"
              width={450}
              height={600}
              className="w-[200px] sm:w-[280px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-auto object-contain xl:object-cover xl:object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamLead;
