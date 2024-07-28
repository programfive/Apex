import { Wrapper } from "@/components/shared/wrapper";
import Image from "next/image";

export function Hero() {
  return (
    <Wrapper className="mb-10 flex flex-col gap-6">
      <section className="flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-5xl font-semibold leading-tight text-text-primary">
          Our vision is to make <br />{" "}
          <span className="text-primary">communication inspiring</span> <br />{" "}
          and rewarding.
        </h2>
        <p className="text-md  max-w-[33rem] text-gray-600">
          Apex is a cloud-based chat platform designed to simplify and
          streamline communication. Apex is a powerful tool that can help small
          and medium-sized businesses manage their interactions and
          communication operations with ease.
        </p>
      </section>
      <section className="flex items-center gap-20">
        <div className="flex flex-col gap-4">
          <div className="flex max-w-[28rem] flex-col  text-lg text-gray-600">
            <h2 className="text-4xl font-semibold text-text-primary">
              Empowering Global Communication.
            </h2>
            <p className="my-6">
              Apex, founded in 2009, is a software development company with a
              global presence. Our communication management platform automates
              processes for startups and growing midsize companies, improving
              efficiency and freeing up staff time. Reliable and secure, Apex is
              backed by technology experts with a proven track record.
            </p>
          </div>
          <div className="flex gap-10 ">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <h2 className="text-2xl font-semibold text-text-primary">30+</h2>
              <p className="text-sm text-gray-600">Team Members</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <h2 className="text-2xl font-semibold text-text-primary">100+</h2>
              <p className="text-sm text-gray-600">Features</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <h2 className="text-2xl font-semibold text-text-primary">5K+</h2>
              <p className="text-sm text-gray-600">Companies</p>
            </div>
          </div>
        </div>
        <div className="relative flex gap-4">
          <div className="pt-20">
            <Image
              src="/images/founder.svg"
              alt="apex founder"
              width={340}
              height={340}
            />
            <div className="mt-2">
              <h3 className="text-sm font-medium text-text-primary">
                Ronald Richards
              </h3>
              <p className="text-sm text-gray-600">Founder</p>
            </div>
          </div>
          <div>
            <Image
              src="/images/co-founder.svg"
              alt="apex founder"
              width={340}
              height={340}
            />
            <div className="mt-2">
              <h3 className="text-sm font-medium text-text-primary">
                Darrell Steward
              </h3>
              <p className="text-sm text-gray-600">Co-Founder</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
