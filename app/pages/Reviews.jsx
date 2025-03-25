import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ReviewStack } from "../../components/ui/ReviewStack";
import { InfiniteMovingReviews } from "../../components/ui/infinite-moving-reviews";
import { motion } from "framer-motion";

const Reviews = () => {
  const reviewers = [
    "/reviews/SoumenChowdhury.jpg",
    "/reviews/DrPrathaPratim.jpg",
    "/reviews/mtbLogo.png",
    // "/team_images/biru.png",
    // "/team_images/biru.png",
    // "/team_images/biru.png",
    // "/team_images/biru.png",
    // "/team_images/biru.png",
  ];
  const reviews = [
    {
      name: "Soumen Chowdhury",
      review:
        "We have the best journey with this agency because of their punctuality, dedication and unblemished high quality work and friendly behavior. Want to do more work with you and to grow much too. Best digital marketing agency in North Bengal.",
      platform: "Chowdhury Medical",
      location: "West Bengal",
      image: "/reviews/SoumenChowdhury.jpg",
      stars: 5,
    },
    {
      name: "Dr. Partha Pratim Debnath",
      review:
        "Happy with the service provided by Bireswar and team… very sincere and dedicated towards the work… keep growing… all the best👍🏻",
      platform: "Dr. Partha Pratim",
      location: "Cooch Behar",
      image: "/reviews/DrPrathaPratim.jpg",
      stars: 5,
    },
    {
      name: "Farid Pramanik",
      review:
        "The service provided by you is undoubtedly praiseworthy.Your team is expert in designing that is proved in the design. The advertisement really attracts the viewers .In short , the fact of digital marketing always gets fulfilment in the hands of your team.",
      platform: "Mtb education",
      location: "India",
      image: "/reviews/mtbLogo.png",
      stars: 5,
    },
    // {
    //   name: "Ayush Paul",
    //   review: "Amzing Work done by Bireswar Das",
    //   platform: "linkedin",
    //   location: "Cooch Behar",
    //   image: "/team_images/biru.png",
    //   stars: 5,
    // },
  ];

  const starsRef = useRef(null);

  useEffect(() => {
    // Add a subtle floating animation to the stars
    if (starsRef.current) {
      const stars = starsRef.current.querySelectorAll("img");
      stars.forEach((star, index) => {
        // Create subtle staggered animation
        const delay = index * 0.15;
        const animation = star.animate(
          [
            { transform: "translateY(0px)" },
            { transform: "translateY(-3px)" },
            { transform: "translateY(0px)" },
          ],
          {
            duration: 2000,
            delay: delay * 1000,
            iterations: Infinity,
            easing: "ease-in-out",
          }
        );
      });
    }
  }, []);

  // Animation variants for framer-motion
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stackVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="mx-5 my-10 overflow-hidden" id="reviews">
      <div className="flex flex-wrap">
        <motion.div
          className="sm:w-[40%] w-full sm:m-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%"
            variants={headerVariants}
          >
            What our customers say about Fool Ideas
          </motion.h1>

          <motion.div variants={stackVariants}>
            <ReviewStack
              avatarUrls={reviewers}
              numPeople={99}
              className="mt-14"
            />
          </motion.div>

          <motion.div
            className="flex mt-3 gap-1 items-center"
            ref={starsRef}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.6,
                staggerChildren: 0.1,
              },
            }}
            viewport={{ once: true }}
          >
            <Image
              src="/star.svg"
              alt="star"
              width={6}
              height={4}
              className="sm:w-6 w-4"
            />
            <Image
              src="/star.svg"
              alt="star"
              width={6}
              height={4}
              className="sm:w-6 w-4"
            />
            <Image
              src="/star.svg"
              alt="star"
              width={6}
              height={4}
              className="sm:w-6 w-4"
            />
            <Image
              src="/star.svg"
              alt="star"
              width={6}
              height={4}
              className="sm:w-6 w-4"
            />
            <Image
              src="/star.svg"
              alt="star"
              width={6}
              height={4}
              className="sm:w-6 w-4"
            />

            <motion.p
              className="sm:text-sm md:text-lg text-xs pl-2 text-[#B1C8BF]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              {" "}
              Google reviews
            </motion.p>
          </motion.div>
        </motion.div>
        <div className="sm:w-auto w-full">{/* videos */}</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <InfiniteMovingReviews items={reviews} />
      </motion.div>
    </section>
  );
};

export default Reviews;
