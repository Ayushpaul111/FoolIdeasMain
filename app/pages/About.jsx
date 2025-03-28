import Image from "next/image";
import miniLogo from "../../components/vectors/miniLogo.svg";
import circle from "../../components/vectors/circleWhite.svg";
import facebook from "../../components/vectors/facebook.webp";
import insta from "../../components/vectors/insta.png";
import whatsapp from "../../components/vectors/whatsapp.png";
import linkedin from "../../components/vectors/linkedin.png";
import telegram from "../../components/vectors/telegram.png";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1 },
  };

  return (
    <div
      id="aboutUs"
      className="h-auto  w-full flex justify-center items-center flex-col px-4 sm:px-8 lg:px-0 mb-12"
    >
      <div className="text-center ">
        <motion.h1
          {...fadeInUp}
          transition={{ duration: 0.8 }}
          className=" text-3xl sm:text-4xl md:text-5xl  font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%"
        >
          About Fool Ideas
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-play mt-6 text-base sm:text-2xl md:text-3xl max-w-3xl  mx-auto text-[#B1C8BF]"
        >
          Guiding Your Success Every Step of the Way
        </motion.p>
      </div>
      <div className="flex md:flex-row flex-col sm:mt-10 mt-6 sm:text-left text-center">
        <div className="md:w-3/5 flex justify-center items-center  lg:ml-20 sm:mx-10  ">
          <motion.p
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-play text-base sm:text-lg md:text-xl text-[#B1C8BF] leading-snug"
          >
            Foolideas was founded with a simple yet powerful vision: to help
            businesses unleash their full potential through innovative marketing
            strategies. Our team of creative thinkers and marketing experts work
            tirelessly to deliver solutions that not only meet but exceed our
            client&apos;s expectations. We aim to be the top digital marketing
            agency in West Bengal and North Bengal.
          </motion.p>
        </div>
        {/* animate-[spin_3s_linear_infinite] */}
        <div className="relative animate-[spin_12s_linear_infinite] md:w-2/5 flex justify-center items-center mt-10">
          {/* Circle Layout */}
          <div className="relative z-10 ">
            {/* Profile 1 (Top Center) */}
            <div className="absolute top-[-33px] left-[80px] animate-[spin_reverse_12s_linear_infinite]">
              <Image
                src={facebook}
                width={80}
                height={80}
                className="rounded-full "
                objectFit="cover"
                alt="Profile 1"
              />
            </div>

            {/* Profile 2 (Top-Left) */}
            <div className="absolute top-[50px] left-[-23px] animate-[spin_reverse_12s_linear_infinite]">
              <Image
                src={insta}
                width={80}
                height={80}
                className="rounded-full "
                objectFit="cover"
                alt="Profile 2"
              />
            </div>

            {/* Profile 3 (Top-Right) */}
            <div className="absolute top-[50px] right-[-25px] animate-[spin_reverse_12s_linear_infinite]">
              <Image
                src={whatsapp}
                width={80}
                height={80}
                className="rounded-full "
                objectFit="cover"
                alt="Profile 3"
              />
            </div>

            {/* Profile 4 (Bottom-Left) */}
            <div className="absolute bottom-[-10px] left-[15px] animate-[spin_reverse_12s_linear_infinite]">
              <Image
                src={linkedin}
                width={80}
                height={80}
                className="rounded-full "
                objectFit="cover"
                alt="Profile 4"
              />
            </div>

            {/* Profile 5 (Bottom-Right) */}
            <div className="absolute bottom-0 right-[10px] animate-[spin_reverse_12s_linear_infinite]">
              <Image
                src={telegram}
                width={80}
                height={80}
                className="rounded-full "
                objectFit="cover"
                alt="Profile 5"
              />
            </div>

            {/* Circle */}
            <Image src={circle} alt="Circle" className="w-full h-auto block" />

            {/* Center Mini Logo */}
          </div>
          <motion.div
            animate={{ rotate: 0 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="z-10 absolute"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={miniLogo} alt="Mini Logo" />
            </motion.div>
          </motion.div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-52 bg-[#19A069] rounded-full blur-3xl opacity-30 z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
