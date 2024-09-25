"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "/placeholder.svg?height=96&width=96",
    quote:
      "This SaaS platform has revolutionized our marketing efforts. The AI-powered insights have helped us make data-driven decisions that significantly improved campaign performance.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateTech",
    image: "/placeholder.svg?height=96&width=96",
    quote: "The collaboration features are top-notch.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Data Analyst",
    company: "DataDrive",
    image: "/placeholder.svg?height=96&width=96",
    quote: "As a data analyst",
    rating: 4,
  },
];

export default function Testimonial() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600 dark:text-indigo-400">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Hear from Our Satisfied Customers
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
                        {testimonial.role} at {testimonial.company}
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
