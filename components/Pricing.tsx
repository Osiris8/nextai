import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    priceMonthly: "$29",
    description:
      "Perfect for individuals and small teams just getting started.",
    features: [
      "5 Projects",
      "10GB Storage",
      "Basic Analytics",
      "Email Support",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#",
    priceMonthly: "$79",
    description: "Ideal for growing businesses and larger teams.",
    features: [
      "Unlimited Projects",
      "100GB Storage",
      "Advanced Analytics",
      "Priority Support",
      "Team Collaboration",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "Custom",
    description: "Tailored solutions for large-scale organizations.",
    features: [
      "Unlimited Everything",
      "Custom Integrations",
      "Dedicated Account Manager",
      "24/7 Phone Support",
      "On-Premise Option",
    ],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for&nbsp;you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Whether you&#39;re a solo entrepreneur or a large enterprise, we have
          a plan that fits your needs.
        </p>
        <div className="mt-16 flex justify-center">
          <fieldset className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200">
            <legend className="sr-only">Payment frequency</legend>
            <label className="cursor-pointer rounded-full px-2.5 py-1 bg-indigo-600 text-white">
              <input
                type="radio"
                name="frequency"
                value="monthly"
                className="sr-only"
                defaultChecked
              />
              <span>Monthly</span>
            </label>
            <label className="cursor-pointer rounded-full px-2.5 py-1">
              <input
                type="radio"
                name="frequency"
                value="annually"
                className="sr-only"
              />
              <span>Annually</span>
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
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.priceMonthly}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  /month
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
                {tier.name === "Enterprise" ? "Contact sales" : "Get started"}
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
