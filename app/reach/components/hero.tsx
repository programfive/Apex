import Phone from "@/components/phone";
import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <Wrapper className="relative  flex gap-36">
      <section className="mt-12 max-w-[30rem] py-6">
        <div className="space-y-6">
          <h1 className="text-5xl font-semibold leading-tight text-text-primary">
            Feel like you&apos;re really there now
          </h1>

          <p className="text-lg text-gray-600">
            Feel like you&apos; really there. Stay close to the people you care
            about with reliable messaging and seamless calling from your
            favorite browser.
          </p>
          <Button>Start Chatting Now</Button>
        </div>
      </section>
      <section className="relative">
        <Phone>hol</Phone>
      </section>
    </Wrapper>
  );
}
