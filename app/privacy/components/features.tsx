import { Wrapper } from "@/components/shared/wrapper";
import { PRIVACY_FEATURES } from "../constants";
import { CustomCard } from "@/components/custom-card";

export const Features = () => {
  return (
    <Wrapper className=" my-10">
      <h1 className="mb-6 text-center text-4xl font-bold leading-tight text-text-primary">
        Protect all your conversations
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PRIVACY_FEATURES.map((feature, index) => (
          <CustomCard
            key={index}
            Icon={feature.Icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Wrapper>
  );
};
