"use client";
import { Wrapper } from "@/components/shared/wrapper";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";

import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ChatCard } from "./chat-card";
import { TEAM_MEMBERS } from "../constants";
const StarRating = () => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <Star
          key={star}
          size={14}
          className={
            index < 4
              ? "text-text-yellow-100"
              : "fill-text-gray stroke-text-gray opacity-30"
          }
          fill={index < 4 ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
};

export function Hero() {
  return (
    <Wrapper className="flex gap-36">
      <section className="max-w-lg py-6">
        <div className="space-y-4">
          <h1 className="text-5xl font-semibold leading-tight text-text-primary ">
            Start <span className="text-primary">chatting</span> with customers,
            anytime, anywhere with Apex
          </h1>
          <p className="text-lg text-gray-600">
            Great software that allows you to chat from any place at any time
            without any interruption.
          </p>
          <Button className="space-x-1">
            <span>Start chatting Now</span>
            <ArrowRight size={20} />
          </Button>
        </div>
        <div className="mt-16 flex">
          <AnimatedTooltip items={TEAM_MEMBERS} />
          <div className="mx-4 flex gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-text-primary">
                2,291
              </h2>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div className="relative h-10 w-0.5 rounded-full bg-text-primary" />
            <div>
              <h2 className="text-2xl font-semibold text-text-primary">
                4.8/5
              </h2>
              <div className="flex items-center gap-1">
                <StarRating />
                <p className="text-sm text-gray-600">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" relative ">
        <div className="absolute -bottom-0 right-6 z-10 h-[400px] w-[400px] rounded-full bg-primary" />
        <div className="absolute -bottom-0 right-2 z-20 h-[400px] w-[400px]  rounded-full border-2  border-text-primary bg-transparent " />
        <Image
          src="/images/woman-chat.svg"
          width={480}
          height={480}
          alt="chat women"
          className="relative z-40"
        />
        <ChatCard
          imageSrc="/images/ellipse10.jpg"
          name="Liz Rodriguez"
          message="One of the best chatting app I have ever used."
          className="absolute -left-10 bottom-5 z-50"
        />
      </section>
    </Wrapper>
  );
}
