"use client";

import Image from "next/image";

const companies = [
  { name: "Acme Corp", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Globex", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Soylent Corp", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Initech", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Umbrella Corp", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Hooli", logo: "/placeholder.svg?height=40&width=120" },
];

export function TrustedByComponent() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 dark:text-white">
          Trusted by the world&#39;s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            >
              <Image
                className="h-12 w-full object-contain saturate-0 transition-all duration-300 hover:saturate-100"
                src={company.logo}
                alt={company.name}
                width={120}
                height={40}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
