"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {
  const musicReviews = [
    {
      title: "Mesmerizing Melody",
      description:
        "A symphony of emotions that took the audience on an unforgettable musical journey.",
      link: "mesmerizing-melody",
      isFeatured: true,
    },
    {
      title: "Voice of the Divine",
      description:
        "A soulful rendition that left everyone spellbound with its sheer brilliance.",
      link: "voice-of-the-divine",
      isFeatured: true,
    },
    {
      title: "Rhythms of India",
      description:
        "An eclectic mix of classical and contemporary beats that showcased the richness of Indian music.",
      link: "rhythms-of-india",
      isFeatured: false,
    },
    {
      title: "Harmony in Concert",
      description:
        "A perfect blend of instruments and vocals that created a magical evening.",
      link: "harmony-in-concert",
      isFeatured: true,
    },
    {
      title: "Soulful Serenade",
      description:
        "An enchanting performance that touched the hearts of all who attended.",
      link: "soulful-serenade",
      isFeatured: false,
    },
    {
      title: "Epic Beats",
      description:
        "A thrilling performance that had the crowd dancing to the beats all night long.",
      link: "epic-beats",
      isFeatured: true,
    },
    {
      title: "Musical Extravaganza",
      description:
        "A grand celebration of music featuring some of the best talents in the industry.",
      link: "musical-extravaganza",
      isFeatured: false,
    },
    {
      title: "Classical Fusion",
      description:
        "An innovative blend of traditional and modern music that was both refreshing and nostalgic.",
      link: "classical-fusion",
      isFeatured: true,
    },
  ];

  const FeaturedMusicReviews = musicReviews.filter(
    (review) => review.isFeatured
  );

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-teal-600 text-base font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="text-4xl text-orange-500 dark:text-white mt-[1rem] font-bold">
            Enhance Your Vibe
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-8">
          {/* Here goes the Main part of this page */}
          <HoverEffect items={FeaturedMusicReviews} />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/courses"}>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Learn More!
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
