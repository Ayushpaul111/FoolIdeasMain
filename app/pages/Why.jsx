import React from "react";

const Why = () => {
  return (
    <section>
      <div className="text-center mx-3 mb-32">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl   font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
          Why choose Fool Ideas?
        </h1>
        <p className="font-play mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
          Guiding Your Success Every Step of the Way
        </p>
        {/* Reasons */}
        <div className="flex justify-center mt-8 flex-wrap">
          <div className="w-[340px] h-[100px] mx-3 my-3  border-[1px] border-[#007443A3] rounded-lg bg-[#001C10] ">
            <div className="m-3 flex">
              <div className="w-[60px] h-[40px] bg-[#007443A3] ">icon</div>
              <div className="text-start ml-5">
                <p className="text-[17px] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                  Expertise
                </p>
                <p className="text-[#B1C8BF] text-[14px]">
                  We bring a wealth of knowledge and experience.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[340px] h-[100px] mx-3 my-3  border-[1px] border-[#007443A3] rounded-lg bg-[#001C10] ">
            <div className="m-3 flex">
              <div className="w-[60px] h-[40px] bg-[#007443A3] ">icon</div>
              <div className="text-start ml-5">
                <p className="text-[17px] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                  Customized Solutions
                </p>
                <p className="text-[#B1C8BF] text-[14px]">
                  We tailor our services to meet your unique needs.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[340px] h-[100px] mx-3 my-3  border-[1px] border-[#007443A3] rounded-lg bg-[#001C10] ">
            <div className="m-3 flex">
              <div className="w-[60px] h-[40px] bg-[#007443A3] ">icon</div>
              <div className="text-start ml-5">
                <p className="text-[17px] font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                  Results-Driven
                </p>
                <p className="text-[#B1C8BF] text-[14px]">
                  Our focus is on achieving your business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
