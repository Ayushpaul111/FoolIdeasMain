import React from "react";
import Image from "next/image";
const Services = () => {
  return (
    <section>
      <div className="text-center mx-3 mb-32">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
          Our Services
        </h1>
        <p className="font-play mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
          We Love challenging projects that require a comprehensive content
          strategy, thoughtful design, sophisticated development and ongoing
          marketing.
        </p>
        {/* Cards */}
        <div className="flex justify-center mt-8 flex-wrap">
          {/* Social */}
          <div className="relative w-[400px] h-[450px] mx-3 my-3  border-[1px] border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-90% bg-opacity-30">
            <div className="absolute h-[100%] w-[100%] bg-[url('/services/bggrid.png')]"></div>
            <div className="m-5 relative h-[90%] ">
              <div className="w-[100px] h-[100px] ">
                <Image src="/services/social.svg" height={100} width={100} />
              </div>

              <div className="text-start ">
                <p className="text-lg sm:text-xl md:text-2xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                  Social Media Management
                </p>
                <p className="text-[#B1C8BF] text-base sm:text-lg md:text-xl mt-2">
                  Boost your brand&apos;s presence with content scheduling,
                  engagement, and performance analytics.
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

          {/* Content */}
          <div className="relative w-[400px] h-[450px] mx-3 my-3  border-[1px] border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-90% bg-opacity-30">
            <div className="absolute h-[100%] w-[100%] bg-[url('/services/bggrid.png')]"></div>
            <div className="m-5 relative h-[90%] ">
              <div className="w-[100px] h-[100px] ">
                <Image src="/services/content.svg" height={100} width={100} />
              </div>

              <div className="text-start ">
                <p className="text-lg sm:text-xl md:text-2xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                  Content Creation
                </p>
                <p className="text-[#B1C8BF] text-base sm:text-lg md:text-xl mt-2">
                  Engage your audience with high-quality, original content
                  tailored to your brand.
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

          {/* Web */}
          <div className="relative w-[400px] h-[450px] mx-3 my-3  border-[1px] border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-90% bg-opacity-30">
            <div className="absolute h-[100%] w-[100%] bg-[url('/services/bggrid.png')]"></div>
            <div className="m-5 relative h-[90%] ">
              <div className="w-[100px] h-[100px] ">
                <Image src="/services/web.svg" height={100} width={100} />
              </div>

              <div className="text-start ">
                <p className="text-lg sm:text-xl md:text-2xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                  Web Development
                </p>
                <p className="text-[#B1C8BF] text-base sm:text-lg md:text-xl mt-2">
                  Get a sleek, responsive website optimized for performance and
                  conversion.
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

          {/* Performance */}
          <div className="relative w-[400px] h-[450px] mx-3 my-3  border-[1px] border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-90% bg-opacity-30">
            <div className="absolute h-[100%] w-[100%] bg-[url('/services/bggrid.png')]"></div>
            <div className="m-5 relative h-[90%] ">
              <div className="w-[100px] h-[100px] ">
                <Image src="/services/performance.svg" height={100} width={100} />
              </div>

              <div className="text-start ">
                <p className="text-lg sm:text-xl md:text-2xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                Performance Marketing & Paid Media
                </p>
                <p className="text-[#B1C8BF] text-base sm:text-lg md:text-xl mt-2">
                Drive traffic and boost conversions with data-driven paid media strategies.
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


          {/* SEO */}
          <div className="relative w-[400px] h-[450px] mx-3 my-3  border-[1px] border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-90% bg-opacity-30">
            <div className="absolute h-[100%] w-[100%] bg-[url('/services/bggrid.png')]"></div>
            <div className="m-5 relative h-[90%] ">
              <div className="w-[100px] h-[100px] ">
                <Image src="/services/search.svg" height={100} width={100} />
              </div>

              <div className="text-start ">
                <p className="text-lg sm:text-xl md:text-2xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                Search Engine Optimization (SEO)
                </p>
                <p className="text-[#B1C8BF] text-base sm:text-lg md:text-xl mt-2">
                Improve your search rankings and attract organic traffic with effective SEO techniques.
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

{/* Brand */}
<div className="relative w-[400px] h-[450px] mx-3 my-3  border-[1px] border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-90% bg-opacity-30">
            <div className="absolute h-[100%] w-[100%] bg-[url('/services/bggrid.png')]"></div>
            <div className="m-5 relative h-[90%] ">
              <div className="w-[100px] h-[100px] ">
                <Image src="/services/branding.svg" height={100} width={100} />
              </div>

              <div className="text-start ">
                <p className="text-lg sm:text-xl md:text-2xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                Branding and Designing
                </p>
                <p className="text-[#B1C8BF] text-base sm:text-lg md:text-xl mt-2">
                Create a memorable brand image with our comprehensive branding and design services.
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


{/* Ecommerce */}
<div className="relative w-[400px] h-[450px] mx-3 my-3  border-[1px] border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-90% bg-opacity-30">
            <div className="absolute h-[100%] w-[100%] bg-[url('/services/bggrid.png')]"></div>
            <div className="m-5 relative h-[90%] ">
              <div className="w-[100px] h-[100px] ">
                <Image src="/services/ecomm.svg" height={100} width={100} />
              </div>

              <div className="text-start ">
                <p className="text-lg sm:text-xl md:text-2xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                E-Commerce Marketing
                </p>
                <p className="text-[#B1C8BF] text-base sm:text-lg md:text-xl mt-2">
                Increase your online sales with tailored e-commerce marketing strategies.
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


{/* influencer */}
<div className="relative w-[400px] h-[450px] mx-3 my-3  border-[1px] border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-90% bg-opacity-30">
            <div className="absolute h-[100%] w-[100%] bg-[url('/services/bggrid.png')]"></div>
            <div className="m-5 relative h-[90%] ">
              <div className="w-[100px] h-[100px] ">
                <Image src="/services/influencer.svg" height={100} width={100} />
              </div>

              <div className="text-start ">
                <p className="text-lg sm:text-xl md:text-2xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                Influencer Marketing
                </p>
                <p className="text-[#B1C8BF] text-base sm:text-lg md:text-xl mt-2">
                Amplify your brand's reach with authentic influencer campaigns.
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


{/* influencer */}
<div className="relative w-[400px] h-[450px] mx-3 my-3  border-[1px] border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-90% bg-opacity-30">
            <div className="absolute h-[100%] w-[100%] bg-[url('/services/bggrid.png')]"></div>
            <div className="m-5 relative h-[90%] ">
              <div className="w-[100px] h-[100px] ">
                <Image src="/services/ads.svg" height={100} width={100} />
              </div>

              <div className="text-start ">
                <p className="text-lg sm:text-xl md:text-2xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                Google Ads
                </p>
                <p className="text-[#B1C8BF] text-base sm:text-lg md:text-xl mt-2">
                Reach your target audience effectively with optimized Google Ads campaigns.
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



        </div>
      </div>
    </section>
  );
};

export default Services;
