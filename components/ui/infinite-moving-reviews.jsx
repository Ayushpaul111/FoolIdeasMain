"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
export const InfiniteMovingReviews = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  function getstars(n) {
    let stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(
        <Image
          key={i}
          src="/star.svg"
          alt="star"
          width={3}
          height={3}
          className="w-3 sm:w-4"
        />
      );
    }
    return stars;
  }
  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20   overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="sm:w-[300px] w-[250px]  mx-3 my-3  border-[1px] border-[#007443A3] rounded-lg bg-[#001C10] "
          >
            <div className="text-start  m-3 flex flex-col md:justify-between md:min-h-[330px]">
              <div>
                <p className=" font-bold md:text-lg sm:text-base text-sm bg-clip-text text-transparent bg-gradient-to-br from-[#FFFFFF] from-40% to-[#4C685D] to-80%">
                  {item.platform}
                </p>
                <p className="text-[#B1C8BF] md:text-base sm:text-sm text-xs mt-4">
                  {item.review}
                </p>
                <div className="flex mt-3 gap-1 items-center ">
                  {getstars(item.stars)}
                </div>
              </div>
              <div className="flex mt-3 items-center">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt="Profile"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="ml-3 ">
                  <p className="text-xs sm:text-sm  text-[#B1C8BF]">
                    {item.name}
                  </p>
                  <p className="text-xs sm:text-sm  text-[#B1C8BF]">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
