import Image from "next/image";
import React from "react";
import NewsletterForm from "./newsletter";

const HomeHero = () => {
  return (
    <div className="relative max-w-screen-lg mx-auto flex justify-center flex-col items-center p-24">
      <h1 className="text-6xl font-bold text-center max-w-2xl leading-tight">
        Weekly Insights for SaaS Founders
      </h1>
      <p className="text-center text-lg text-gray-500 mt-4 max-w-screen-sm">
        I&apos;ll share my learnings and insights with you as I build my own
        SaaS startup with the goal to help you do it faster.
      </p>
      <NewsletterForm />
      {/* <p className="font-semibold mt-2">
        Get a bonus idea template when you join 🚀
      </p> */}
    </div>
  );
};

export default HomeHero;
