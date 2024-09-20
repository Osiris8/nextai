"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-base-100 text-base-content">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">NextAI</span>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 15 15"
                version="1.1"
                id="rocket"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="path7143"
                  d="M12.5547,1c-2.1441,0-5.0211,1.471-6.9531,4H4C2.8427,5,2.1794,5.8638,1.7227,6.7773L1.1113,8h1.4434H4l1.5,1.5L7,11v1.4453v1.4434l1.2227-0.6113C9.1362,12.8206,10,12.1573,10,11V9.3984c2.529-1.932,4-4.809,4-6.9531V1H12.5547z M10,4c0.5523,0,1,0.4477,1,1l0,0c0,0.5523-0.4477,1-1,1l0,0C9.4477,6,9,5.5523,9,5v0C9,4.4477,9.4477,4,10,4L10,4z M3.5,10L3,10.5C2.2778,11.2222,2,13,2,13s1.698-0.198,2.5-1L5,11.5L3.5,10z"
                />
              </svg>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="btn btn-ghost btn-circle"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-base-content"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-base-content"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-base-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="logo"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-ghost btn-circle"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-base-content hover:bg-base-200"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-base-content hover:bg-base-200"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-base-content sm:text-6xl">
              Your AI, Your Questions, Instant Answers
            </h1>
            <p className="mt-6 text-lg leading-8 text-base-content">
              NextAI is here to provide accurate answers to all your questions.
              Ask anything, anytime, and get reliable, instant responses from
              our advanced AI technology.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="btn btn-primary">
                Get started
              </a>
              <a href="#" className="btn btn-link">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
