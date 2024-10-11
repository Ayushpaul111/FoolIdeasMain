"use client";

import React from "react";
import { InfiniteMovingIcons } from "../../components/ui/infinite-moving-icons";

const ScrollCompanies = () => {
  return (
    <div className="h-[15px] rounded-md flex flex-col antialiased items-center justify-center relative mb-32 grayscale">
      <InfiniteMovingIcons
        items={testimonials}
        // direction="right"
        speed="slow"
      />
    </div>
  );
};

export default ScrollCompanies;

const testimonials = [
  {
    image: "/companies/comp1.png",
  },
  // {
  //   image: "/companies/comp2.jpg",
  // },

  // {
  //   image: "/companies/comp4.png",
  // },
  {
    image: "/companies/comp6.png",
  },
  // {
  //   image: "/companies/comp7.jpg",
  // },
  {
    image: "/companies/comp8.png",
  },
  {
    image: "/companies/comp9.png",
  },
  // {
  //   image: "/companies/comp10.jpg",
  // },
  // {
  //   image: "/companies/comp11.jpg",
  // },
  {
    image: "/companies/comp3.png",
  },
  {
    image: "/companies/comp12.png",
  },
  // {
  //   image: "/companies/comp13.jpg",
  // },
  {
    image: "/companies/comp14.png",
  },
];
