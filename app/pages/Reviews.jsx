import React from "react";
import Image from "next/image";
import { ReviewStack } from "../../components/ui/ReviewStack";
import { InfiniteMovingReviews } from "../../components/ui/infinite-moving-reviews";
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
  return (
    <section className="mx-5 my-10 ">
      <div className="flex flex-wrap">
        <div className="sm:w-[40%] w-full sm:m-10">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl  font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
            What our customers say about Fool Ideas
          </h1>
          <ReviewStack
            avatarUrls={reviewers}
            numPeople={99}
            className="mt-14"
          />
          <div className="flex mt-3 gap-1 items-center ">
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

            <p className="sm:text-sm md:text-lg text-xs pl-2 text-[#B1C8BF]">
              {" "}
              Google reviews
            </p>
          </div>
        </div>
        <div className="sm:w-auto w-full  ">{/* videos */}</div>
      </div>

      <InfiniteMovingReviews items={reviews} />
    </section>
  );
};

export default Reviews;
