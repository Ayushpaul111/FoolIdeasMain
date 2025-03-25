import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Service = ({ items }) => {
  return (
    <div className="flex justify-center mt-8 flex-wrap">
      {items.map((item, index) => {
        return (
          <motion.div
            key={item.image}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            className="relative w-[400px] h-[450px] mx-3 my-3 border-[1px] border-[#007443A3] rounded-lg bg-gradient-to-tr from-0% from-[#79f7b631] to-[#001C10] to-90% bg-opacity-30"
          >
            <div className="absolute h-[100%] w-[100%] bg-[url('/services/bggrid.png')]"></div>
            <div className="m-5 relative h-[90%]">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                className="w-[100px] h-[100px]"
              >
                <Image src={item.image} height={100} width={100} />
              </motion.div>

              <div className="text-start">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.2,
                  }}
                  className="text-lg sm:text-xl md:text-2xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%"
                >
                  {item.service}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.2,
                  }}
                  className="text-[#B1C8BF] text-base sm:text-lg md:text-xl mt-2"
                >
                  {item.description}
                </motion.p>
              </div>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.2,
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#0a3d26",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/+917427983047"
                target="_blank"
                className="bg-[#001C10] rounded-full text-sm sm:text-base md:text-lg px-4 py-2 border-[1px] border-green-300 text-white absolute bottom-0 left-0"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Service;
