import { Wrapper } from "@/components/shared/wrapper";
import { CORE_VALUES } from "../constants";
import { CustomCard } from "@/components/custom-card";
export function Values() {
  return (
    <Wrapper className="mb-10">
      <section className="mx-auto px-4">
        <div className="mx-auto mb-8 flex max-w-[33rem] flex-col items-center justify-center text-center ">
          <h2 className="text-center text-4xl font-semibold leading-tight text-text-primary ">
            Our core values.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            At our company, we believe great people make great products. Our
            culture champions diversity, and our team embodies these values
            every day. Want to know more?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map((value, index) => (
            <CustomCard
              key={index}
              Icon={value.Icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
