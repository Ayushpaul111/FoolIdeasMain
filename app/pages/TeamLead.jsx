import React from "react";

const TeamLead = () => {
  return (
    
      <div className="text-center sm:m-10 m-5 mb-32">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl  font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
          Our Team Lead
        </h1>
        <p className="font-play mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
          Guiding Your Success Every Step of the Way
        </p>
        {/* Leader Card */}

        <div className=" mt-8  border-[1px] border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-9  0%">
          <div className="flex flex-col sm:flex-row my-8 sm:mx-16 m-5">
            
            <div className="text-start sm:w-[55%] ">
                <p className="text-3xl sm:text-4xl md:text-5xl mb font-semibold  bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">Bireswar das</p>
                <p className="mt-5 text-base sm:text-lg md:text-xl text-[#B1C8BF] ">Marketing Speialistr and Team Lead</p>
                <p className="text-[#B1C8BF] text-base sm:text-lg md:text-xl mt-5">Bireswar is a seasoned marketing specialist with over 7 years of experience in driving digital marketing strategies for top brands. She excels in crafting compelling campaigns that resonate with target audiences and boost brand visibility. With a deep understanding of market trends and a creative approach to problem-solving, Emma leads our marketing team with a passion for innovation and results. Her expertise spans content marketing, social media strategy, and data-driven decision-making, ensuring our clients achieve measurable growth and success.</p>
                <div></div>
            </div>
            <div className="">
                {/* <img src="/ceo.jpg" alt="Bireswar Das"  width='200px' className="m-auto"/> */}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default TeamLead;
