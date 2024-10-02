"use client";

import Image from "next/image";
import Github from "@/public/images/github.svg";
import Discord from "@/public/images/discord.svg";
import Lexington from "@/public/images/lexington.svg";
import Afterpay from "@/public/images/afterpay.svg";
import Attentive from "@/public/images/attentive.svg";
import Maze from "@/public/images/maze.svg";
const companies = [
  { name: "Github", logo: Github },
  { name: "Discord", logo: Discord },
  { name: "Lexington", logo: Lexington },
  { name: "Afterpay", logo: Afterpay },
  { name: "Attentive", logo: Attentive },
  { name: "Maze", logo: Maze },
];

export function Trusted() {
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
