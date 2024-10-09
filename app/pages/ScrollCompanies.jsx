"use client";

import React from "react";
import { InfiniteMovingIcons } from "../../components/ui/infinite-moving-icons";

const ScrollCompanies = () => {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased bg-[#00120B] items-center justify-center relative overflow-hidden mb-20">
      <InfiniteMovingIcons
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
};

export default ScrollCompanies;

const testimonials = [
  {
    image:
      "https://freelogopng.com/images/all_img/1657952217google-logo-png.png",
  },
  {
    image: "https://logos-world.net/wp-content/uploads/2020/02/Canva-Logo.png",
  },
];
