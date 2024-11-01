import { Wrapper } from "@/components/shared/wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { HeroChat } from "@/components/hero-chat";
import {
  ArrowLeft,
  EllipsisVertical,
  Mic,
  PhoneOffIcon,
  Video,
} from "lucide-react";
import Phone from "@/components/phone";
export function Call() {
  return (
    <Wrapper className="relative my-10 flex items-center justify-center gap-24">
      <section className="max-w-[450px]">
        <h2 className="text-4xl font-bold leading-tight text-text-primary">
          Call your friends and family
        </h2>
        <p className="my-6 text-lg text-gray-600">
          Even if life takes you down other paths, your loved ones are just a
          phone call away. Enjoy real-time calls and video calls
        </p>
      </section>
      <section className="relative">
        <Phone>
          <section className=" flex items-center justify-between  px-4 pb-4">
            <ArrowLeft size={24} />
            <EllipsisVertical size={24} />
          </section>
          <section className="flex h-full  w-full flex-1 flex-col justify-center ">
            <div className="mb-20 flex  w-full flex-col items-center justify-center">
              <div className="flex items-center justify-center rounded-full bg-gray-600 object-cover">
                <Image
                  src="/images/ellipse2.jpg"
                  className="h-40 w-40 rounded-full  object-cover"
                  alt="ellipse2"
                  width={400}
                  height={400}
                />
              </div>
              <p className=" mt-4 font-semibold text-gray-800 ">
                Emily Rodriguez
              </p>
              <p className="text-sm text-gray-600">00:23</p>
            </div>
          </section>
          <section className="absolute bottom-5 left-0  right-0 px-4  ">
            <div className="border-border flex justify-center  gap-4 border-t px-6 pt-6 ">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-600 transition-colors ">
                <Video className="h-6 w-6 text-white" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-600 transition-colors ">
                <Mic className="h-6 w-6 text-white" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 transition-colors hover:bg-red-700">
                <PhoneOffIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          </section>
        </Phone>
      </section>
      
    </Wrapper>
  );
}
