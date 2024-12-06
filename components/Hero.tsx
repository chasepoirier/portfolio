"use server";
import React from "react";
import Image from "next/image";
import { FancyCTAButton } from "./FancyCTAButton";
import Link from "next/link";
import { getCouponUsage } from "@/lib/stripe";
import { CheckIcon } from "@radix-ui/react-icons";
import SocialProof from "./SocialProof";
import { config } from "@/config";

interface Props {
  stripeCheckoutUrl: string | null;
}

const Hero: React.FC<Props> = async ({ stripeCheckoutUrl }) => {
  const usageCount = (await getCouponUsage()) || 0;
  return (
    <div className="relative isolate overflow-hidden bg-black">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-white/5">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 lg:flex lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-2">
            <div className="inline-flex space-x-3 items-center">
              <span className="rounded-full bg-primary-default/5 px-3 py-1 text-sm font-semibold leading-6 text-primary-default ring-1 ring-inset ring-primary-default/20">
                Early Bird Special
              </span>
              <span className="text-sm font-medium leading-6 text-white/80">
                <span className="text-primary-default">
                  {config.stripe.discount}
                </span>{" "}
                your order ({config.stripe.totalDiscounts - usageCount} left)
              </span>
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Your MVP launched in 2 Weeks—Without the Coding Headache
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Fast, efficient coding solutions tailored for founders who need to
            move fast. Let&apos;s work together so that you can:
          </p>
          <ul className="mt-6">
            <li className="flex mt-2 gap-2 text-white text-lg font-medium">
              <CheckIcon className="text-primary-default w-8 h-8" />
              Get to market faster
            </li>

            <li className="flex mt-2 gap-2 text-white text-lg font-medium">
              <CheckIcon className="text-primary-default w-8 h-8" />
              Save time and resources
            </li>
            <li className="flex mt-2 gap-2 text-white text-lg font-medium">
              <CheckIcon className="text-primary-default w-8 h-8" />
              Focus on strategy and growth
            </li>
          </ul>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href={stripeCheckoutUrl || "/"}>
              <FancyCTAButton>Build Your MVP</FancyCTAButton>
            </Link>
          </div>
          <SocialProof />
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:max-w-none lg:flex-none -ml-2 md:-ml-12">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              alt="App screenshot"
              src="/hero.png"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
