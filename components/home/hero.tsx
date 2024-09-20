import React from "react";
import NewsletterForm from "./newsletter";

const HomeHero = () => {
  return (
    <div className="relative max-w-screen-lg mx-auto flex justify-center flex-col items-center p-8 md:p-24 mt-12 md:mt-0">
      <h1 className="md:text-6xl text-4xl font-bold text-center max-w-2xl leading-tight">
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
