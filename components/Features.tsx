"use client";
import { ClockIcon, ShieldCheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Instant Responses",
    description:
      "Get answers to your questions in seconds with our advanced AI that processes information in real time.",
    icon: ClockIcon,
  },
  {
    name: "Available 24/7",
    description:
      "Ask your questions anytime; our service is always online to assist you.",
    icon: ClockIcon,
  },
  {
    name: "Data Security",
    description:
      "All your interactions are secure, ensuring your data privacy and protection.",
    icon: ShieldCheckIcon,
  },
];

export default function Features() {
  return (
    <div className="overflow-hidden bg-base-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">
                Why Choose Our SaaS?
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
                An Enhanced Experience
              </p>
              <p className="mt-6 text-lg leading-8 text-base-content">
                Our platform allows you to ask any questions and receive
                precise, quick answers.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-base-content lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-base-content">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
