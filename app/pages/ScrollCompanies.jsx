"use client";

import React, { useEffect, useState } from "react";
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
  // {
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUX5LMRa7atIsNfl0nP3DaUaV4URhV0PHfA&s",
  // },
  {
    image:
      "https://freelogopng.com/images/all_img/1657952217google-logo-png.png",
  },
  {
    image: "https://logos-world.net/wp-content/uploads/2020/02/Canva-Logo.png",
  },
  // {
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUX5LMRa7atIsNfl0nP3DaUaV4URhV0PHfA&s",
  // },
  // {
  //   image: "https://logos-world.net/wp-content/uploads/2020/02/Canva-Logo.png",
  // },
  // {
  //   quote:
  //     "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
  //   name: "William Shakespeare",
  //   title: "Hamlet",
  // },
  // {
  //   quote: "All that we see or seem is but a dream within a dream.",
  //   name: "Edgar Allan Poe",
  //   title: "A Dream Within a Dream",
  // },
  // {
  //   quote:
  //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //   name: "Jane Austen",
  //   title: "Pride and Prejudice",
  // },
  // {
  //   quote:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  // },
];
