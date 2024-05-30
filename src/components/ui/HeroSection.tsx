"use client";
import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "../ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0 dark:text-white">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="gray" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
          laborum omnis, amet rem consequatur fuga perspiciatis natus maiores
          quas, recusandae porro cumque ipsum suscipit repellat aperiam libero
          tenetur corporis in.
        </p>
      </div>
      <div className="mt-4">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-800 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:dark:bg-slate-900"
          >
            Explore Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
