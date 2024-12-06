import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "User Authentication",
    description:
      "Implement secure login and registration features to manage user access efficiently.",
  },
  {
    name: "Custom Dashboards",
    description:
      "Create personalized user interfaces that provide essential insights and controls for users.",
  },
  {
    name: "Payment Integration",
    description:
      "Seamlessly integrate payment gateways like Stripe or PayPal for smooth transactions.",
  },
  {
    name: "Notifications",
    description:
      "Send real-time notifications to engage users and keep them updated on key actions.",
  },
  {
    name: "Analytics & Reporting",
    description:
      "Track user behavior and performance metrics to make data-driven decisions for your product.",
  },
  {
    name: "Mobile-Responsive Design",
    description:
      "Ensure the app is fully responsive across all devices for a seamless mobile experience.",
  },
  {
    name: "Third-Party Integrations",
    description:
      "Integrate external services and tools to extend the functionality of your MVP.",
  },
  {
    name: "Cloud Deployment",
    description:
      "Deploy your MVP on scalable cloud platforms to support growth as user demand increases.",
  },
];

export default function AllFeatures() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-primary-default">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All-in-one MVP development
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Our service gives you all the key features to bring your idea to
              life quickly and effectively.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    aria-hidden="true"
                    className="absolute left-0 top-1 h-5 w-5 text-primary-default"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
