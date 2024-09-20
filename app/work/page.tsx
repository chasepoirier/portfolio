import WorkNavbar from "@/components/work-navbar";
import { config } from "@/config";
import { Metadata } from "next";
import { usePlausible } from "next-plausible";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Chase Poirier | Fullstack Software Engineer",
  description: "I build things and talk about it.",
};

const WorkPage = () => {
  const plausible = usePlausible();
  return (
    <>
      <WorkNavbar />
      <main className="w-[95%] max-w-screen-xl mx-auto">
        <div className="flex flex-wrap-reverse md:flex-nowrap justify-between items-center gap-6 bg-gray-50 rounded-xl p-4 md:p-16">
          <div className="md:flex-1 w-full">
            <p className="text-xs uppercase text-gray-400 font-semibold">
              Web & Mobile Software Consultant for non-technical Founders
            </p>
            <h1 className="md:text-5xl text-4xl font-bold mt-2 mb-4">
              Deliver an MVP that <br /> your customers love
            </h1>
            <p className="text-lg">
              No more worrying if you&apos;re building the right product.
            </p>
            <p className="text-lg mt-2">
              Let&apos;s work together to create an MVP so that you:
            </p>
            <ul className="list-none list-inside text-lg mt-4 ml-2 mb-12">
              <li className="flex gap-2 items-center my-1">
                <FiCheck className="text-purple-600" size={28} />
                Exceed customer expectations
              </li>
              <li className="flex gap-2 items-center my-1">
                <FiCheck className="text-purple-600" size={28} />
                Launch on time and on budget
              </li>

              <li className="flex gap-2 items-center my-1">
                <FiCheck className="text-purple-600" size={28} />
                Have higher quality, less buggy, software
              </li>

              <li className="flex gap-2 items-center my-1">
                <FiCheck className="text-purple-600" size={28} />
                Can scale smoothly as your customer base grows
              </li>
            </ul>
            <Link
              onClick={() => plausible("schedule-intro-call")}
              href={config.urls.introCall}
              target="_blank"
              className="button inline-flex items-center gap-2 text-base"
            >
              Schedule an Intro Call <FiArrowRight className="mt-[1px]" />
            </Link>
          </div>
          <div className="md:flex-1 w-full flex justify-center">
            <Image
              className="md:-mb-24 rounded-xl"
              src="/headshot-min.png"
              width={450}
              height={350}
              alt="Chase Poirier"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default WorkPage;
