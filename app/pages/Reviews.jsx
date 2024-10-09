import React from "react";
import Image from "next/image";
import { ReviewStack } from "../../components/ui/ReviewStack";
import { InfiniteMovingReviews } from "../../components/ui/infinite-moving-reviews";
const Reviews = () => {
  const reviewers = [
    "/team_images/biru.png",
    "/team_images/biru.png",
    "/team_images/biru.png",
    "/team_images/biru.png",
    "/team_images/biru.png",
    "/team_images/biru.png",
    "/team_images/biru.png",
    "/team_images/biru.png",
  ];
  const reviews = [
    {
      name: "xkjbkj",
      review: "dinm jbe geiwgiw ewigeiegi",
      platform: "fiver",
      location: "usa",
      image: "/team_images/biru.png",
      stars: 4,
    },
    {
      name: "Suman Das",
      review: "Amzing Work done by Bireswar Das",
      platform: "linkedin",
      location: "Cooch Behar",
      image: "/team_images/biru.png",
      stars: 5,
    },
    {
      name: "xkjebk",
      review: "dilken owie iwoiwi woop oiwin",
      platform: "fiver",
      location: "usa",
      image: "/team_images/biru.png",
      stars: 4,
    },
    {
      name: "Suman Das",
      review: "Amzing Work done by Bireswar Das",
      platform: "linkedin",
      location: "Cooch Behar",
      image: "/team_images/biru.png",
      stars: 5,
    },
  ];
  return (
    <section className="mx-5 my-10 ">
      <div className="flex flex-wrap flex">
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
              325 reviews
            </p>
          </div>
        </div>
        <div className="sm:w-auto w-full  ">skh</div>
      </div>

      <InfiniteMovingReviews items={reviews} />
    </section>
  );
};

export default Reviews;
