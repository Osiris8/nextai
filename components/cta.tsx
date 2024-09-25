"use client";

import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="bg-indigo-700 dark:bg-indigo-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-200">
            Start your free trial today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-neutral-200 border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 dark:border-neutral-800"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-neutral-200 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:border-neutral-800"
            >
              Learn more
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
