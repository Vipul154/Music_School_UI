"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const TestimonialsPage = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="dark:text-white text-white text-3xl text-center mt-[2rem] z-5">
        Hear our Clients Voice
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

const testimonials = [
  {
    quote:
      "The concert was an emotional rollercoaster, a journey through sound that left us spellbound and craving for more.",
    name: "Rohan Sharma",
    title: "Music Enthusiast",
  },
  {
    quote:
      "Her voice has the power to heal, to transport, and to transform. Each note she hits is pure magic.",
    name: "Ananya Iyer",
    title: "Music Critic",
  },
  {
    quote:
      "Their performance was like a dream within a dream, a mesmerizing blend of rhythm and harmony.",
    name: "Ayesha Khan",
    title: "Concert Goer",
  },
  {
    quote:
      "It is a truth universally acknowledged that a band in possession of great talent must be in want of a stage.",
    name: "Meera Patel",
    title: "Music Blogger",
  },
  {
    quote:
      "Call me captivated. From the first strum of the sitar to the last echo of the tabla, their music held me in thrall.",
    name: "Arjun Verma",
    title: "Music Journalist",
  },
];
export default TestimonialsPage;
