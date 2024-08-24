import { config } from "@/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import millify from "millify";

const Navbar = async () => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?${new URLSearchParams({
      id: "UCyeLrVCvHrAh3IBh2nMBS7g",
      part: "statistics",
      key: config.google.apiKey as string,
    }).toString()}`
  ).then((res) => res.json());

  const subCount = response?.items?.[0]?.statistics?.subscriberCount ?? "0";
  const millifiedSubCount = millify(Number(subCount), { precision: 2 });

  return (
    <div className="flex justify-center max-w-screen-xl w-[95%] mx-auto">
      <div className="flex justify-between items-center py-4 flex-1">
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
        <div className="flex justify-end gap-8 items-center">
          <Link href={"/work"}>Want to build an app?</Link>
          <Link href={"/newsletter"}>Newsletter</Link>
          <div className="button bg-red-500 flex gap-2">
            <Image src="/youtube.svg" width={20} height={20} alt="Youtube" />
            {millifiedSubCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
