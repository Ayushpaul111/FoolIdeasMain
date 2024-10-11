"use client";

import React from "react";
import { InfiniteMovingIcons } from "../../components/ui/infinite-moving-icons";

const ScrollCompanies = () => {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased bg-[#00120B] items-center justify-center relative overflow-hidden mb-32">
      <InfiniteMovingIcons
        items={testimonials}
        // direction="right"
        speed="fast"
      />
    </div>
  );
};

export default ScrollCompanies;

const testimonials = [
  {
    image:"/companies/comp1.png"
  },
  {
    image:"/companies/comp2.jpg"
  },  
  {
    image:"/companies/comp3.png"
  },
  {
    image:"/companies/comp4.jpg"
  },  
  {
    image:"/companies/comp6.jpg"
  }, 
  {
    image:"/companies/comp7.jpg"
  }, 
  {
    image:"/companies/comp8.jpg"
  }, 
  {
    image:"/companies/comp9.jpg"
  }, 
  {
    image:"/companies/comp10.jpg"
  }, 
  {
    image:"/companies/comp11.jpg"
  }, 
  {
    image:"/companies/comp12.jpg"
  }, 
  {
    image:"/companies/comp13.jpg"
  }, 
  {
    image:"/companies/comp14.jpg"
  }, 
];
