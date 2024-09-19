import Image from "next/image";
import miniLogo from "@/components/vectors/miniLogo.svg";
import circle from "@/components/vectors/circleWhite.svg";

const About = () => {
  return (
    <div className="h-auto md:h-[50rem] w-full flex justify-center items-center flex-col space-y-20 px-4 sm:px-8 lg:px-0 bg-[#00120B] ">
      <div>
        <h1 className="mt-16 text-3xl sm:text-4xl md:text-5xl font-play font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
          About Fool Ideas
        </h1>
        <p className="font-play mt-3 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#B1C8BF]">
          Guiding Your Success Every Step of the Way
        </p>
      </div>
      <div className="flex md:flex-row flex-col space-y-10">
        <div className="md:w-3/5 flex justify-center items-center px-6 sm:px-8 sm:pl-20  ">
          <h1 className="font-play text-xl text-[#B1C8BF] leading-snug">
            Foolideas was founded with a simple yet powerful vision: to help
            businesses unleash their full potential through innovative marketing
            strategies. Our team of creative thinkers and marketing experts work
            tirelessly to deliver solutions that not only meet but exceed our
            client&apos;s expectations. We aim to be the top digital marketing
            agency in West Bengal and North Bengal.
          </h1>
        </div>
        <div className="relative md:w-2/5 flex justify-center items-center">
          {/* Circle Layout */}
          <div className="relative z-10 ">
            {/* Profile 1 (Top Center) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                className="w-[80px] h-[80px] rounded-full"
                alt="Profile 1"
              />
            </div>

            {/* Profile 2 (Top-Left) */}
            <div className="absolute top-[20%] left-[5%]">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                className="w-[80px] h-[80px] rounded-full"
                alt="Profile 2"
              />
            </div>

            {/* Profile 3 (Top-Right) */}
            <div className="absolute top-[20%] right-[5%]">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                className="w-[80px] h-[80px] rounded-full"
                alt="Profile 3"
              />
            </div>

            {/* Profile 4 (Bottom-Left) */}
            <div className="absolute bottom-0 left-[15%]">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                className="w-[80px] h-[80px] rounded-full"
                alt="Profile 4"
              />
            </div>

            {/* Profile 5 (Bottom-Right) */}
            <div className="absolute bottom-0 right-[15%]">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                className="w-[80px] h-[80px] rounded-full"
                alt="Profile 5"
              />
            </div>

            {/* Circle */}
            <Image src={circle} alt="Circle" className="w-full h-auto block" />

            {/* Center Mini Logo */}
            <Image
              src={miniLogo}
              alt="Mini Logo"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-52 bg-[#19A069] rounded-full blur-3xl opacity-30 z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
