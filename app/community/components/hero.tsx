"use client";
import { FooterChat } from "@/components/footer-chat";
import { HeroChat } from "@/components/hero-chat";
import { Wrapper } from "@/components/shared/wrapper";

import Image from "next/image";

export function Hero() {
  return (
    <Wrapper className="mt-36 flex gap-48 ">
      <section className="mt-5 max-w-[28rem]">
        <h1 className="text-5xl font-bold leading-tight text-text-primary ">
          A place where <br />
          <span className="px-2 text-primary">you can connect </span>
          with your friends.
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Simple messaging in groups and communities to stay connected with the
          people who matter most in your life, fostering deeper relationships
          and shared experiences.
        </p>
      </section>
      <section className="relative">
        <div className="absolute left-0 right-0 top-16 z-20  mt-2 px-[18px] ">
          <div className=" px-4">
            <HeroChat urlAvatar="/images/codeHub.png" name="codeHub" />
            <section className="mt-6 space-y-4">
              <div className="flex items-start justify-start ">
                <div>
                  <p className="mb-1 ml-12  text-sm font-semibold">Sarah</p>
                  <div className="flex  gap-2">
                    <Image
                      src="/images/ellipse1.jpg"
                      alt="Sarah Johnson"
                      width={480}
                      height={480}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div className="rounded-lg bg-gray-100 p-2">
                      <p className="max-w-52 text-sm">
                        The project is delivered.!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-end ">
                <div>
                  <div className="flex gap-2">
                    <p className="max-w-52 rounded-lg bg-orange-500 bg-primary p-2 text-sm text-white">
                      I&apos;m missing a few tests.
                    </p>

                    <Image
                      src="/images/ellipse3.jpg"
                      alt="ellipse 2"
                      width={480}
                      height={480}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex  items-start gap-2">
                <Image
                  src="/images/ellipse5.jpg"
                  alt="Sarah Johnson"
                  width={480}
                  height={480}
                  className="h-8 w-8 mt-6 rounded-full object-cover"
                />
                <div className="flex flex-col gap-2">
                  <p className="  text-sm font-semibold">Camila</p>
                  <div className="rounded-lg bg-gray-100 p-2">
                    <p className="max-w-52 text-sm">I can help you with that</p>
                  </div>
                  <div className="flex w-20 rounded-lg bg-gray-100 p-2">
                    <p className="text-2xl">...</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className=" h-[28rem]  overflow-hidden ">
          <Image
            src="/images/iPhone.svg"
            alt="site chat"
            width={420}
            height={420}
            className="drop-shadow-lg"
          />
        </div>

        <FooterChat />
      </section>
    </Wrapper>
  );
}
