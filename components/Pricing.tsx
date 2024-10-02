"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    priceMonthly: 19,
    priceAnnually: 190,
    description:
      "Idéal pour les utilisateurs individuels ou les petites équipes.",
    features: [
      "500 requêtes IA par mois",
      "Support par email",
      "Mises à jour régulières",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#",
    priceMonthly: 49,
    priceAnnually: 490,
    description:
      "Parfait pour les entreprises en expansion qui ont besoin de plus de requêtes IA.",
    features: [
      "5000 requêtes IA par mois",
      "Support prioritaire",
      "Analyse avancée des données",
      "Accès à des fonctionnalités premium",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "Custom",
    priceAnnually: "Custom",
    description: "Solutions personnalisées pour les grandes organisations.",
    features: [
      "Requêtes IA illimitées",
      "Support dédié 24/7",
      "Intégrations sur mesure",
      "Fonctionnalités avancées et exclusives",
    ],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  const [frequency, setFrequency] = useState<"monthly" | "annually">("monthly");

  const handleFrequencyChange = (newFrequency: "monthly" | "annually") => {
    setFrequency(newFrequency);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Tarifs
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choisissez le plan qui vous convient
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Que vous soyez un entrepreneur individuel ou une grande entreprise,
          nous avons un plan adapté à vos besoins.
        </p>
        <div className="mt-16 flex justify-center">
          <fieldset className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200">
            <legend className="sr-only">Payment frequency</legend>
            <label
              className={`cursor-pointer rounded-full px-2.5 py-1 ${
                frequency === "monthly" ? "bg-indigo-600 text-white" : ""
              }`}
            >
              <input
                type="radio"
                name="frequency"
                value="monthly"
                className="sr-only"
                checked={frequency === "monthly"}
                onChange={() => handleFrequencyChange("monthly")}
              />
              <span>Par mois</span>
            </label>
            <label
              className={`cursor-pointer rounded-full px-2.5 py-1 ${
                frequency === "annually" ? "bg-indigo-600 text-white" : ""
              }`}
            >
              <input
                type="radio"
                name="frequency"
                value="annually"
                className="sr-only"
                checked={frequency === "annually"}
                onChange={() => handleFrequencyChange("annually")}
              />
              <span>Par An</span>
            </label>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "ring-2 ring-indigo-600"
                  : "ring-1 ring-gray-200",
                "rounded-3xl p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                    "text-lg font-semibold leading-8"
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                    Plus populaire
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {typeof tier[
                    frequency === "monthly" ? "priceMonthly" : "priceAnnually"
                  ] === "number"
                    ? `$${
                        tier[
                          frequency === "monthly"
                            ? "priceMonthly"
                            : "priceAnnually"
                        ]
                      }`
                    : tier[
                        frequency === "monthly"
                          ? "priceMonthly"
                          : "priceAnnually"
                      ]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  /{frequency === "monthly" ? "mois" : "an"}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                    : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                {tier.name === "Enterprise" ? "Contactez-nous" : "Commencer"}
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
