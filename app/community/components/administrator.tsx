import { Wrapper } from "@/components/shared/wrapper";
import { FEATURES } from "../constants";

import { CustomCard } from "@/components/custom-card";
export function Administrator() {
  return (
    <Wrapper className="relative my-20   gap-24">
      <h2 className=" text-center text-4xl font-bold  leading-tight text-text-primary">
        Manage your groups <hr /> and conversations
      </h2>

      <section className="mt-24">
        <div className="relative">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <CustomCard
                key={index}
                Icon={feature.Icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
