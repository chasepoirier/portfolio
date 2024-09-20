"use client";

import { config } from "@/config";
import { usePlausible } from "next-plausible";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const CTAButton = () => {
  const plausible = usePlausible();
  return (
    <Link
      onClick={() => plausible("schedule-intro-call")}
      href={config.urls.introCall}
      target="_blank"
      className="button inline-flex items-center gap-2 text-base"
    >
      Schedule an Intro Call <FiArrowRight className="mt-[1px]" />
    </Link>
  );
};

export default CTAButton;
