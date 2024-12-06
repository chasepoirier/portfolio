import {
  GlobeAltIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
  {
    name: "Lightning-Fast Development",
    description:
      "We'll build your MVP in just 14 days, allowing you to test, iterate, and pivot rapidly with real user feedback.",
    icon: ClockIcon,
  },
  {
    name: "Tailored to Your Vision",
    description:
      "Custom-designed features to meet your unique business needs, ensuring your MVP stands out from the competition.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Ready to Scale",
    description:
      "Built on scalable architecture, your MVP will grow with your business—easily integrating new features and scaling as you do.",
    icon: GlobeAltIcon,
  },
];

export default function FeatureCallout() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary-default">
                Launch faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What You&apos;ll Get
              </p>
              <p className="mt-6 text-lg leading-8 text-white/80">
                In just 2 weeks, you&apos;ll receive a fully functional MVP with
                custom features, designed to launch your startup quickly.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-primary-default"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline text-white/80">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src="/vscode.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
