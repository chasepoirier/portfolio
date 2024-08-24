import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex justify-center flex-col items-center my-32">
      <h1 className="text-5xl font-bold text-center max-w-md leading-tight">
        Weekly Insights for Solo SaaS Founders
      </h1>
      <p className="text-center text-lg text-gray-500 mt-4 max-w-screen-md">
        Join other solo founders I&apos;ll share my learnings and insights with
        you as I build a SaaS startup, so you can do it faster.
      </p>
    </div>
  );
};

export default HomeHero;
