import WorkNavbar from "@/components/work-navbar";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FaCoffee } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Chase Poirier | Fullstack Software Engineer",
  description: "I build things and talk about it.",
};

const WorkPage = () => {
  return (
    <>
      <WorkNavbar />
      <main className="w-[95%] max-w-screen-xl mx-auto">
        <div className="flex flex-wrap-reverse md:flex-nowrap justify-between items-center gap-6 bg-gray-50 rounded-xl p-4 md:p-16">
          <div className="md:flex-1 w-full">
            <p className="text-xs uppercase text-gray-400 font-semibold">
              Web & Mobile Software Consultant for Denver Based Agencies
            </p>
            <h1 className="md:text-5xl text-4xl font-bold mt-2 mb-4">
              Deliver more software that your clients love
            </h1>
            <p className="text-lg">
              No more cramming to launch products right before their deadline.
            </p>
            <p className="text-lg mt-2">
              Let&apos;s work together on your next client project so that you:
            </p>
            <ul className="list-none list-inside text-lg mt-4 ml-2 mb-12">
              <li className="flex gap-2 items-center my-1">
                <FiCheck className="text-purple-600" size={28} />
                Exceed client expectations
              </li>
              <li className="flex gap-2 items-center my-1">
                <FiCheck className="text-purple-600" size={28} />
                Launch on time and on budget
              </li>

              <li className="flex gap-2 items-center my-1">
                <FiCheck className="text-purple-600" size={28} />
                Deliver higher quality, less buggy, software
              </li>

              <li className="flex gap-2 items-center my-1">
                <FiCheck className="text-purple-600" size={28} />
                Set your clients up for success as their business grows
              </li>
            </ul>
            <div className="button inline-flex items-center gap-2 text-base">
              Let&apos;s get a coffee <FaCoffee className="mt-[1px]" />
            </div>
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

        <section className="max-w-screen-xl mx-auto my-52 flex justify-between gap-12">
          <div className="flex-1">
            <Image
              src="/map.png"
              width={500}
              height={500}
              alt="Location"
              className="shadow-md rounded-xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mt-12 mb-4">
              Hi, I&apos;m Chase
            </h2>
            <p className="text-lg">
              I&apos;m a Denver based fullstack software engineer with more than
              8 years experience in the field. I&apos;ve worked with a variety
              of clients, from small startups to large enterprises, and
              I&apos;ve helped them build and launch software that their users
              love.
            </p>
            <p className="text-lg mt-4">
              I work for Contentful but spend my free time consulting with
              development agencies in the Denver area. I&apos;m passionate about
              helping agencies deliver more software that their clients love.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default WorkPage;
