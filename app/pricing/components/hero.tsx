import React from "react";
import { Button } from "@/components/ui/button";
import { PRICING_PLANS, PricingCardProps } from "../constants/index";
import { cn } from "@/lib/utils";

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10",
        plan.style.card,
        plan.id === "business" && "shadow-2xl"
      )}
    >
      <h3 className={cn("text-lg font-semibold leading-7", plan.style.text)}>
        {plan.name}
      </h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span
          className={cn(
            "text-7xl font-semibold tracking-tight",
            plan.id === "business" ? "text-white" : "text-text-primary"
          )}
        >
          ${plan.price}
        </span>
        <span
          className={cn(
            "text-base",
            plan.id === "business" ? "text-gray-100" : "text-gray-600"
          )}
        >
          /month
        </span>
      </p>
      <p
        className={cn(
          "mt-6 text-base leading-7",
          plan.id === "business" ? "text-gray-100" : "text-gray-600"
        )}
      >
        {plan.description}
      </p>
      <ul role="list" className="mt-6 space-y-3 text-sm leading-6">
        {plan.features.map((feature, index) => (
          <li 
            key={index} 
            className={cn(
              "flex items-center gap-x-3 text-gray-800",
              plan.id === "business" && "text-gray-100"
            )}
          >
            <feature.icon className={cn("h-5 w-5 flex-none", plan.style.icon)} />
            {feature.text}
          </li>
        ))}
      </ul>
      <Button variant={plan.buttonVariant} className="mt-6 w-full">
        {plan.buttonText}
      </Button>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <div className="relative isolate bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold leading-tight text-text-primary">
          <span className="text-orange-500">Subscriptions</span> <br />
          Choose your chat plan
        </h1>
      </div>

      <p className="mx-auto mt-6 max-w-lg flex-col text-center text-lg text-gray-600">
        Select the perfect plan for your messaging needs. From casual
        conversations to enterprise-level communication, we&apos;ve got you
        covered.
      </p>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-6 sm:mt-20 lg:max-w-6xl lg:grid-cols-3">
        {PRICING_PLANS.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Hero;