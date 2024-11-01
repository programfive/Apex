import { Wrapper } from "@/components/shared/wrapper";
import { Card } from "@/components/ui/card";
import { FEATURES } from "@/app/(protected)/constants";
import { LucideProps } from "lucide-react";
import Image from "next/image";
import { CustomCard } from "@/components/custom-card";

export function Features() {
  return (
    <Wrapper className="my-20">
      <h2 className="text-center text-4xl font-bold leading-tight text-text-primary">
        Features for a better experience
      </h2>
      <section className="mt-10">
        <div className="flex gap-4">
          {FEATURES.map((feature, index) => {
            return (
              <CustomCard
                key={index}
                Icon={feature.Icon}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
}
