"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const navigation = {
  product: [
    { name: "Caractéristiques", href: "#" },
    { name: "Tarifs", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  company: [
    { name: "A propos", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Presse", href: "#" },
  ],
  legal: [
    { name: "Confidentialité", href: "#" },
    { name: "Termes", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "License", href: "#" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
  ],
};

export function Footer() {
  return (
    <footer
      className="bg-white dark:bg-gray-900"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-indigo-600 dark:text-indigo-400">
              <span className="sr-only">Your Company</span>
              <svg
                width="30"
                height="30px"
                viewBox="0 0 15 15"
                version="1.1"
                id="rocket"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="path7143"
                  d="M12.5547,1c-2.1441,0-5.0211,1.471-6.9531,4H4&#xA;&#x9;C2.8427,5,2.1794,5.8638,1.7227,6.7773L1.1113,8h1.4434H4l1.5,1.5L7,11v1.4453v1.4434l1.2227-0.6113&#xA;&#x9;C9.1362,12.8206,10,12.1573,10,11V9.3984c2.529-1.932,4-4.809,4-6.9531V1H12.5547z M10,4c0.5523,0,1,0.4477,1,1l0,0&#xA;&#x9;c0,0.5523-0.4477,1-1,1l0,0C9.4477,6,9,5.5523,9,5v0C9,4.4477,9.4477,4,10,4L10,4z M3.5,10L3,10.5C2.2778,11.2222,2,13,2,13&#xA;&#x9;s1.698-0.198,2.5-1L5,11.5L3.5,10z"
                />
              </svg>
            </Link>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              Dynamisez votre entreprise avec des solutions IA de pointe.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Produits
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Entreprise
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Politique
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 dark:border-gray-100/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} NextAI, Inc. Tous droits reservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
