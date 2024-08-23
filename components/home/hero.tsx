import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">
          Free Weekly <br />
          Marketing Newsletter
        </h1>
        <p>
          Join 100k+ subscribers to the Free Marketing Newsletter for insider
          tips, cutting edge strategies, and personal tool recommendations.
        </p>
      </div>
      <div>
        <Image
          src="/headshot-min.png"
          width={500}
          height={500}
          alt="Chase Poirier"
        />
      </div>
    </div>
  );
};

export default HomeHero;
