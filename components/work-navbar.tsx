import { clientConfig } from "@/config-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const WorkNavbar = () => {
  return (
    <div className="flex justify-center max-w-screen-xl w-[95%] mx-auto">
      <div className="flex justify-between items-center py-6 flex-1">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            width={32}
            height={32}
            alt="Logo"
            className="object-contain"
          />
          <div className="text-base text-gray-600">Chase Poirier</div>
        </Link>
        {/* <div className="flex justify-end gap-8 items-center">
          <Link className="text-sm" href={"/services"}>
            Services
          </Link>
          <Link className="text-sm" href={"/portfolio"}>
            See Portfolio
          </Link>
          <Link className="text-sm" href={"/portfolio"}>
            About Chase
          </Link>
        </div> */}

        <Link
          href={clientConfig.urls.introCall}
          target="_blank"
          className="button inline-flex items-center gap-2"
        >
          Tell me about your project <FiArrowRight className="mt-[1px]" />
        </Link>
      </div>
    </div>
  );
};

export default WorkNavbar;
