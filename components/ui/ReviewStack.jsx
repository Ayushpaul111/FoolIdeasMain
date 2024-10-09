"use client";

import React from "react";
import Image from "next/image";
import { cn } from "../../lib/utils";

export const ReviewStack = ({ numPeople, className, avatarUrls }) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <div
          key={url}
          className="sm:w-16 sm:h-16 w-10 h-10 overflow-hidden rounded-full"
        >
          <Image
            className="sm:w-16 w-10 rounded-full "
            src={url}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};
