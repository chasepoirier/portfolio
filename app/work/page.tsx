import { Container } from "@/components/Container";
import WorkNavbar from "@/components/work-navbar";
import CTAButton from "@/components/work/CTAButton";
import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FiCheck } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Chase Poirier | Fullstack Software Engineer",
  description: "I build things and talk about it.",
};

const WorkPage = () => {
  return (
    <Container>
      <div className="pt-16 flex flex-col items-center justify-center w-[95%] mx-auto">
        <p className="text-xs uppercase text-gray-400 font-semibold text-center">
          Software consultant for creator businesses
        </p>
        <h1 className="md:text-5xl text-5xl font-bold mt-2 mb-4 text-center">
          Build an app for your audience
        </h1>
        <p className="md:text-lg text-center">
          No more second-guessing whether you&apos;re on the right path.
        </p>
        <p className="md:text-lg mt-2 text-center">
          Let&apos;s collaborate on an MVP that empowers you to:
        </p>
        <ul className="list-none list-inside text-base mt-4 ml mb-12 mx-auto max-w-screen-md flex flex-col items-center">
          <li className="flex gap-2 items-center my-1">
            <FiCheck className="text-purple-600" size={24} />
            Deliver a standout customer experience.
          </li>
          <li className="flex gap-2 items-center my-1">
            <FiCheck className="text-purple-600" size={24} />
            Launch on time and on budget
          </li>

          <li className="flex gap-2 items-center my-1">
            <FiCheck className="text-purple-600" size={24} />
            Have higher quality, less buggy, software
          </li>

          <li className="flex gap-2 items-center my-1">
            <FiCheck className="text-purple-600" size={24} />
            Scale effortlessly as your community grows
          </li>
        </ul>
        <CTAButton />
      </div>
    </Container>
  );
};

export default WorkPage;
