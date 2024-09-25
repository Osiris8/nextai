"use client";

import { Zap, Shield, BarChart, Users, Globe, Clock } from "lucide-react";

const features = [
  {
    name: "'Lightning Fast'",
    description:
      "'Experience blazing fast performance with our optimized infrastructure.'",
    icon: Zap,
  },
  {
    name: "'Bank-Level Security'",
    description:
      "'Your data is protected with state-of-the-art encryption and security measures.'",
    icon: Shield,
  },
  {
    name: "'Advanced Analytics'",
    description:
      "'Gain valuable insights with our powerful analytics and reporting tools.'",
    icon: BarChart,
  },
  {
    name: "'Team Collaboration'",
    description: "'Seamlessly work together with your team in real-time.'",
    icon: Users,
  },
  {
    name: "'Global Accessibility'",
    description:
      "'Access your work from anywhere in the world, on any device.'",
    icon: Globe,
  },
  {
    name: "'24/7 Support'",
    description: "'Our dedicated support team is always ready to assist you.'",
    icon: Clock,
  },
];

export function Feature() {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our SaaS platform is packed with features designed to boost your
            productivity, streamline your workflow, and take your business to
            the next level.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-purple-600 dark:text-purple-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
