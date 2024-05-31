"use client";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const FeaturedCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900 text-white">
      <div className="text-center uppercase text-teal-300 text-1.5xl">
        <h1>Our Featured Courses</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {FeaturedCourses.map((course: Course) => (
          <div key={course.id} className="flex justify-center mt-[2.5rem]">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className=" p-4 sm:p-6 flex flex-col items-center text-center flex-grow gap-4">
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {course.description}
                </p>
                <Link href={`/courses/${course.slug}`}>Learn More!</Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="text-center mt-24">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-800 dark:text-white border-neutral-200 dark:border-slate-800 hover:dark:bg-slate-900 hover:bg-yellow-100 text-black font-bold"
          >
            Explore More!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
