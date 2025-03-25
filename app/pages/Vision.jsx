import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";

const Vision = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  // Use inView feature from Framer Motion
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

  const buttonAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: {
      duration: 0.8,
      delay: 0.6,
      type: "spring",
      stiffness: 200,
    },
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    whileTap: { scale: 0.95 },
  };

  return (
    <section>
      <div className="text-center mx-3 mb-36">
        <motion.h1
          {...fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%"
        >
          Our Vision
        </motion.h1>

        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-play mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-[#B1C8BF]"
        >
          Guiding Your Success Every Step of the Way
        </motion.p>

        <motion.p
          {...fadeIn}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-lg sm:text-md md:text-2xl bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%"
        >
          To help businesses, creators, and innovators turn their ideas into
          impactful realities.
        </motion.p>

        <br />
        <br />

        <motion.button
          {...buttonAnimation}
          data-cal-namespace="15min"
          data-cal-link="fool-ideas-4gekzz/15min"
          data-cal-config='{"layout":"month_view"}'
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-bold mt-10 px-4 py-4 text-[#f9fffa] bg-green-600 rounded-full hover:bg-green-700"
          >
            Free Consultation
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Vision;
