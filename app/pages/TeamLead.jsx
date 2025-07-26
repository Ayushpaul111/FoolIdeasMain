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
      <div className="mt-8 border-[1px] flex flex-col lg:flex-row border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-90% card-shine overflow-hidden">
        {/* Text Content - Order 2 on mobile, Order 1 on desktop */}
        <div className="order-2 lg:order-1 sm:m-16 m-5 lg:w-[60%] relative z-10">
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
            <div className="flex justify-center lg:justify-start mt-4 sm:mt-5 gap-6 sm:gap-10">
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
              {/* <div className="rounded-xl p-px bg-gradient-to-b from-[#38be87] to-[#00130b]">
                <div className="bg-gradient-to-b from-[#143c2b] to-[#00130b] p-2 sm:p-3 rounded-xl">
                  <Link href="https://www.instagram.com/bireswar07/">
                    <img
                      src="/logos/insta.svg"
                      alt="Instagram"
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    />
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Image Container - Order 1 on mobile, Order 2 on desktop */}
        <div className="order-2 lg:w-[40%] w-full flex items-end justify-center lg:justify-end relative overflow-hidden">
          <div className="lg:absolute lg:bottom-0 lg:right-0 relative flex justify-center lg:justify-end w-full min-h-[250px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-0">
            <Image
              src="/team_images/biruNew.png"
              alt="Bireswar Das"
              width={450}
              height={600}
              className="z-20 w-auto h-[250px] sm:h-[320px] md:h-[400px] lg:w-[400px] lg:h-auto object-contain lg:object-cover lg:object-bottom max-w-none"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamLead;
