import Image from "next/image";

const logos = [
  {
    alt: "Github",
    src: "/logos/github.png",
  },
  {
    alt: "NextJS",
    src: "/logos/nextjs.png",
  },
  {
    alt: "Tailwind",
    src: "/logos/tailwind.png",
  },
  {
    alt: "Stripe",
    src: "/logos/stripe.png",
  },
  {
    alt: "Plausible",
    src: "/logos/plausible.png",
  },
];

export default function LogoSlider() {
  return (
    <div className="bg-white py-24 sm:py-32 sm:pt-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
          A tech stack for a modern MVP
        </h2>
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map(({ alt, src }) => (
            <Image
              key={src}
              alt={alt}
              src={src}
              width={158}
              height={48}
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
