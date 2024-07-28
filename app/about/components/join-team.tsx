import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";

export function JoinTeam() {
  return (
    <Wrapper className="relative mb-10 overflow-hidden rounded-lg bg-primary py-12">
      <div className="absolute -bottom-[21.875rem] -left-1/4 h-[38.75rem] w-[38.75rem] scale-50 transform rounded-full border-4 border-white/80 bg-transparent opacity-30" />
      <div className="absolute -bottom-[21.875rem] -left-1/4 h-[38.75rem] w-[38.75rem] scale-75 transform rounded-full border-4 border-white/80 bg-transparent opacity-30" />
      <div className="absolute -bottom-[21.875rem] -left-1/4 h-[38.75rem] w-[38.75rem] scale-90 transform rounded-full border-4 border-white/80 bg-transparent opacity-30" />
      <div className="absolute -bottom-[21.875rem] -left-1/4 h-[38.75rem] w-[38.75rem] scale-105 transform rounded-full border-4 border-white/80 bg-transparent opacity-30" />
      <div className="absolute -bottom-[21.875rem] -right-1/4 h-[38.75rem] w-[38.75rem] scale-50 transform rounded-full border-4 border-white/80 bg-transparent opacity-30" />
      <div className="absolute -bottom-[21.875rem] -right-1/4 h-[38.75rem] w-[38.75rem] scale-75 transform rounded-full border-4 border-white/80 bg-transparent opacity-30" />
      <div className="absolute -bottom-[21.875rem] -right-1/4 h-[38.75rem] w-[38.75rem] scale-90 transform rounded-full border-4 border-white/80 bg-transparent opacity-30" />
      <div className="absolute -bottom-[21.875rem] -right-1/4 h-[38.75rem] w-[38.75rem] scale-105 transform rounded-full border-4 border-white/80 bg-transparent opacity-30" />
      <section className="mx-auto flex max-w-[32rem] flex-col items-center justify-center text-center ">
        <h2 className="text-4xl font-semibold leading-tight text-white">
          Join our team
        </h2>
        <p className="my-6 text-lg text-gray-100">
          Interested in applying for a position? View our Careers page for open
          positions and apply to help build our chat application.
        </p>
        <Button variant="outline">Start chatting Now</Button>
      </section>
    </Wrapper>
  );
}
