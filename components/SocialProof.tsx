import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { StarFilledIcon } from "@radix-ui/react-icons";

const avatars = [
  "/avatars/chase.jpeg",
  "/avatars/george.jpeg",
  "/avatars/jared.jpeg",
  "/avatars/lillian.jpeg",
  "/avatars/ryun.png",
];

const SocialProof = () => {
  return (
    <div className="flex items-center gap-6 mt-12">
      <div className="flex items-center">
        {avatars.map((avatar) => (
          <Avatar
            key={avatar}
            className="-mr-3 border-black border-4 w-12 h-12"
          >
            <AvatarImage src={avatar} />
          </Avatar>
        ))}
      </div>
      <div>
        <div className="flex gap-1">
          {new Array(5).fill("").map((_, i) => (
            <StarFilledIcon className="text-primary-default w-5 h-5" key={i} />
          ))}
        </div>
        <div className="text-white text-base ">
          Vetted by developers & founders
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
