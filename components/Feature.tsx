"use client";

import { Zap, Shield, BarChart, Users, Globe, Clock } from "lucide-react";

const features = [
  {
    name: "Rapide comme l'éclair",
    description:
      "Bénéficiez de performances ultra-rapides grâce à notre infrastructure IA optimisée.",
    icon: Zap,
  },
  {
    name: "Sécurité de niveau bancaire",
    description:
      "Vos données sont protégées par un cryptage et des mesures de sécurité de pointe.",
    icon: Shield,
  },
  {
    name: "Analyses avancées",
    description:
      "Obtenez des informations précieuses grâce à nos puissants outils d'algorithmes.",
    icon: BarChart,
  },
  {
    name: "Collaboration d'équipe",
    description:
      "Travaillez en toute transparence avec votre équipe en temps réel.",
    icon: Users,
  },
  {
    name: "Accessibilité globale",
    description:
      "Accédez à votre travail partout dans le monde, sur n'importe quel appareil.",
    icon: Globe,
  },
  {
    name: "Assistance 24h/24 et 7j/7",
    description:
      "Notre équipe d'assistance dédiée est toujours prête à vous aider.",
    icon: Clock,
  },
];

export function Feature() {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">
            Caractéristiques
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Tout ce dont vous avez besoin
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Notre IA regorge de fonctionnalités conçues pour augmenter votre
            productivité, rationaliser votre flux de travail et faire passer
            votre entreprise au niveau supérieur.
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
