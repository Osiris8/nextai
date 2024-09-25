"'use client'"

import Image from "next/image"
import Link from "next/link"

export function HeroSectionComponent() {
  return (
    <section className="relative bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Revolutionize Your</span>{"'"}
              <span className="block text-purple-600 xl:inline">Workflow</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Streamline your tasks, boost productivity, and achieve more with our cutting-edge SaaS platform. Experience the future of work today.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/signup" className="w-full flex items-center justify-center px-8 py-3 border border-neutral-200 border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 dark:border-neutral-800">
                    Get started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/demo" className="w-full flex items-center justify-center px-8 py-3 border border-neutral-200 border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10 dark:border-neutral-800">
                    Live demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <Image
                className="w-full rounded-lg"
                src="/placeholder.svg?height=400&width=600"
                alt="App screenshot"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}