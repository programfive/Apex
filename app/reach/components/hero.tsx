"use client";
import React, { useState, useEffect } from "react";
import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";


import Image from "next/image";
import {
  Play,
  Pause,
} from "lucide-react";
import { FooterChat } from "@/components/footer-chat";
import { HeroChat } from "@/components/hero-chat";

interface AudioPreviewProps {
  duration?: string;
}

const AudioPreview: React.FC<AudioPreviewProps> = ({ duration = "11:07" }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prevProgress + 1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="mb-4 flex items-center justify-between rounded-full bg-gray-100 p-2">
      <div className="flex flex-grow items-center space-x-2">
        <button onClick={togglePlay} className="focus:outline-none">
          {isPlaying ? (
            <Pause className="text-text-primary" size={16} />
          ) : (
            <Play className="text-text-primary" size={16} />
          )}
        </button>
        <div className="h-1 w-full rounded-full bg-gray-300">
          <div
            className="h-full rounded-full bg-primary transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <span className="ml-2 text-xs text-gray-500">{duration}</span>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <Wrapper className="relative  mt-36 flex gap-36">
      <section className="mt-12 max-w-[30rem] py-6">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight text-text-primary">
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
        <div className=" h-[28rem]  overflow-hidden ">
          <Image
            src="/images/iPhone.svg"
            alt="site chat"
            width={420}
            height={420}
            className="drop-shadow-lg"
          />
        </div>
        <section className="absolute  left-0 right-0 top-16 z-20  mt-2 px-[22px]">
         <HeroChat urlAvatar="/images/ellipse1.jpg" name="Sarah Johnson" state="Online"/>


          <section className="relative mt-6 space-y-4 px-4">
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

            <div className="relative flex items-start gap-2 ">
              <Image
                src="/images/ellipse1.jpg"
                alt="Sarah Johnson"
                width={480}
                height={480}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="relative w-40 rounded-lg bg-gray-100 p-2">
                <AudioPreview />
                <div className="absolute -bottom-3 right-0 z-30">😍</div>
              </div>
            </div>

            <div className="flex items-start justify-end gap-2">
              <div className="rounded-lg bg-orange-500 bg-primary p-2 text-white">
                <p className="max-w-52 text-sm">you can make it cooler</p>
              </div>
              <Image
                src="/images/ellipse2.jpg"
                alt="ellipse 2"
                width={480}
                height={480}
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>
          </section>
        </section>
        <FooterChat />
      </section>
    </Wrapper>
  );
};
