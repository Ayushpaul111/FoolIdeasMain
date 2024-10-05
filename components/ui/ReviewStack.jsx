"use client";

import React from "react";

import { cn } from "../../lib/utils";


export const ReviewStack = ({
  numPeople,
  className,
  avatarUrls,
}) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        
        <div className="sm:w-16 sm:h-16 w-10 h-10 overflow-hidden rounded-full">
        <img
          key={index}
          className="sm:w-16 w-10 rounded-full border-2 border-white dark:border-gray-800"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
        </div>
      ))}
      {/* <a
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
        href=""
      >
        +{numPeople}
      </a> */}
    </div>
  );
};


