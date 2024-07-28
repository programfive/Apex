import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";

export function Begin() {
  return (
    <Wrapper className="mb-20">
      <section className="max-w-[34rem] gap-6 mx-auto flex justify-center items-center flex-col">
        <h2 className="text-center  text-4xl font-semibold leading-tight text-text-primary">
          Ready to grow your business? Start with Apex, become faster every
          second
        </h2>
        <Button>Start Chatting Now</Button>
      </section>
    </Wrapper>
  );
}
