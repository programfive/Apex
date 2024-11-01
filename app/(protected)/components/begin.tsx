import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";

export function Begin() {
  return (
    <Wrapper className="mb-20">
      <section className="mx-auto flex max-w-[34rem] flex-col items-center justify-center gap-6">
        <h2 className="text-center  text-4xl font-bold leading-tight text-text-primary">
          Ready to grow your business? Start with Apex, become faster every
          second
        </h2>
        <Button>Start Chatting Now</Button>
      </section>
    </Wrapper>
  );
}
