"use client";
import { FooterChat } from "@/components/footer-chat";
import { HeroChat } from "@/components/hero-chat";
import { Wrapper } from "@/components/shared/wrapper";

import Image from "next/image";

export function Hero() {
  return (
    <Wrapper className="mt-36 flex gap-48 ">
      <section className="mt-5 max-w-[26rem]">
        <h1 className="text-5xl font-bold leading-tight text-text-primary ">
          Send
          <span className="px-2 text-primary">private </span>
          messages easily and securely
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Your privacy is our priority. With end-to-end encryption, there will
          be no question that your personal messages remain between you and the
          person you are sending them to.
        </p>
      </section>
      <section className="relative">
        <div className="absolute left-0 right-0 top-16 z-20  mt-2 px-[18px] ">
          <div className=" px-4">
            <HeroChat urlAvatar="/images/ellipse2.jpg" name="Emily"/>
            <section className="mt-6 space-y-4">
              <div className="flex items-start gap-2">
                <Image
                  src="/images/ellipse1.jpg"
                  alt="Sarah Johnson"
                  width={480}
                  height={480}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="rounded-lg bg-gray-100 p-2">
                  <p className="max-w-52 text-sm">Hey there!</p>
                </div>
              </div>

              <div className="flex items-start justify-end gap-2">
                <div className="rounded-lg bg-orange-500 bg-primary p-2 text-white">
                  <p className="max-w-52 text-sm">Hi Sarah! How are you?</p>
                </div>
                <Image
                  src="/images/ellipse2.jpg"
                  alt="ellipse 2"
                  width={480}
                  height={480}
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>

              <div className="flex items-start gap-2">
                <Image
                  src="/images/ellipse1.jpg"
                  alt="Sarah Johnson"
                  width={480}
                  height={480}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col gap-2">
                  <div className="rounded-lg bg-gray-100 p-2">
                    <p className="max-w-52 text-sm">
                      I&apos;m doing well, thanks! What about you?
                    </p>
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
