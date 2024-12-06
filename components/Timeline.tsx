const timeline = [
  {
    name: "Discovery & Planning",
    description:
      "We kick off with an in-depth strategy session to align on goals, user needs, and core features. Your idea starts taking shape.",
    date: "Day 1-2",
    dateTime: "2024-09",
  },
  {
    name: "Design & Prototyping",
    description:
      "Our team designs your MVP’s user interface and user experience, followed by an interactive prototype for feedback and iteration.",
    date: "Day 3-5",
    dateTime: "2024-09",
  },
  {
    name: "Development",
    description:
      "With the design approved, we build your MVP’s core functionality using rapid, efficient coding techniques to meet your needs.",
    date: "Day 6-12",
    dateTime: "2024-09",
  },
  {
    name: "Launch & Handover",
    description:
      "Your MVP is deployed, ready for users. We provide support, documentation, and guidance for your next steps.",
    date: "Day 13-14",
    dateTime: "2024-09",
  },
];

export default function Timeline() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="mb-2 text-4xl text-black font-bold">
          Your 2 Week Sprint
        </h1>
        <p className="text-black/80 text-lg mb-12 max-w-screen-md">
          From idea to a fully functional MVP in just 14 days—quick, efficient,
          and ready to scale.
        </p>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-primary-default"
              >
                <svg
                  viewBox="0 0 4 4"
                  aria-hidden="true"
                  className="mr-4 h-1 w-1 flex-none"
                >
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-black/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-black">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-black/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
