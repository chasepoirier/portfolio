import { getYoutubeSubscriberCount } from "@/services/youtube";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const subCount = await getYoutubeSubscriberCount();

  return (
    <div className="flex justify-center max-w-screen-xl w-[90%] mx-auto">
      <div className="flex justify-between items-center py-6 flex-1">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            width={32}
            height={32}
            alt="Logo"
            className="object-contain"
          />
          <div className="text-base hidden md:block text-gray-600">
            Chase Poirier
          </div>
        </Link>
        <div className="flex justify-end gap-8 items-center">
          <Link href={"/work"}>Want to build an app?</Link>
          <div className="button bg-red-500 flex gap-2 hover:bg-red-700">
            <Image src="/youtube.svg" width={20} height={20} alt="Youtube" />
            {subCount !== "0" ? subCount : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
