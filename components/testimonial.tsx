"use client";

import Image from "next/image";
import sarahThompson from "@/public/images/sarah_thompson.png";
import michaelChen from "@/public/images/michael_chen.png";
import emilyRodriguez from "@/public/images/emily_rodriguez.png";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Directeur Marketing",
    company: "TechCorp",
    image: sarahThompson,
    quote:
      "Cette plateforme SaaS a révolutionné nos efforts marketing. Les informations fournies par l'IA nous ont aidés à prendre des décisions basées sur des données qui ont considérablement amélioré les performances de nos campagnes.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateTech",
    image: michaelChen,
    quote:
      "Les fonctionnalités de collaboration sont de premier ordre. La productivité de notre équipe a explosé depuis que nous avons commencé à utiliser cette plateforme. Elle est devenue un élément indispensable de notre flux de travail.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Data Analyst",
    company: "DatuDrive",
    image: emilyRodriguez,
    quote:
      "En tant qu'analyste de données, je suis impressionné par les capacités d'analyse avancées. Les informations que je peux tirer de nos données à l'aide de cette plateforme sont inestimables pour notre stratégie commerciale.",
    rating: 4,
  },
];

export default function Testimonial() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600 dark:text-indigo-400">
            Témoignages
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Nos clients satisfaits
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <div
                key={testimonialIdx}
                className="flex flex-col justify-between bg-white dark:bg-gray-700 p-8 shadow-lg ring-1 ring-gray-900/5 rounded-xl"
              >
                <div>
                  <div className="flex items-center gap-x-4">
                    <Image
                      className="h-16 w-16 rounded-full"
                      src={testimonial.image}
                      alt=""
                      width={96}
                      height={96}
                    />
                    <div>
                      <div className="text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="mt-1 text-sm leading-5 text-gray-600 dark:text-gray-300">
                        {testimonial.role} chez {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-base italic text-gray-600 dark:text-gray-300">
                    {testimonial.quote}
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "'text-yellow-400'"
                          : "'text-gray-300 dark:text-gray-600'"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
