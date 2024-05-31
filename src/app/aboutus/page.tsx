"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { AuroraBackground } from "@/components/ui/aurora-background";

const AboutUsPage = () => {
  return (
    <AuroraBackground className="min-h-screen">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" px-4"
      >
        <div className="text-center flex flex-col gap-4 justify-center items-center mt-[5rem]">
          <div className="text-xl md:text-4xl font-bold dark:text-yellow-200 text-center">
            Welcome to Our Music Haven
          </div>
          <div className="font-extralight text-xl max-w-3xl md:text-2xl dark:text-neutral-200 py-4 text-center">
            Discover the joy of music with us. Whether you're a beginner or a
            seasoned musician, our courses are designed to inspire and educate.
          </div>
          <div className="text-xl  md:text-xl dark:text-neutral-200 py-4 text-center max-w-3xl">
            Our mission is to provide high-quality music education accessible to
            everyone. With experienced instructors, comprehensive courses, and a
            supportive community, we strive to foster a love for music in every
            student. Join us on a musical journey that will enrich your life and
            spark your creativity.
          </div>
          <div className=" md:text-xl dark:text-neutral-200 py-4 text-center max-w-4xl text-sm">
            Meet our team of passionate musicians and educators who are here to
            guide you every step of the way. We believe in the power of music to
            transform lives, and we are committed to helping you achieve your
            musical goals.
          </div>
          <Link href={"/courses"}>
            <div className=" bg-black dark:bg-yellow-200 rounded-full w-fit text-white dark:text-black px-4 py-2">
              Explore our Course
            </div>
          </Link>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default AboutUsPage;
