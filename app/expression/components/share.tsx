import { FooterChat } from "@/components/footer-chat";
import PhoneComponent from "@/components/phone";
import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  EllipsisVertical,
  Video,
  Phone,
  Send,
  Play,
} from "lucide-react";
import Image from "next/image";

export function Share() {
  return (
    <Wrapper className="relative my-10 flex items-center justify-center gap-24">
      <section className="relative">
        <PhoneComponent>
          <section className="flex items-center justify-between border-b border-border px-2 pb-2">
            <div className="flex items-center gap-2 ">
              <ArrowLeft size={24} />
              <div className="flex items-center gap-2 ">
                <Image
                  src="/images/ellipse5.jpg"
                  alt="codeHub"
                  width={900}
                  height={900}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <h3 className="text-sm font-bold text-text-primary">Camila</h3>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Video size={22} />
              <Phone size={22} />
              <EllipsisVertical size={24} />
            </div>
          </section>
          <section className="space-y-4 p-4">
            <div className="flex items-start gap-2">
              <Image
                src="/images/ellipse3.jpg"
                alt="Michael"
                width={480}
                height={480}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="relative bg-gray-100 p-2">
                <Image
                  src="/images/forest.png"
                  alt="food"
                  width={160}
                  height={200}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 ">
                    <Play className="text-white " />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Image
                src="/images/ellipse3.jpg"
                alt="Michael"
                width={480}
                height={480}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="rounded-lg bg-gray-100 p-2">
                <p className="max-w-52 text-sm">This video is great!</p>
              </div>
            </div>

            <div className="flex items-start justify-end gap-2">
              <div className="rounded-lg bg-orange-500 bg-primary p-2 text-white">
                <p className="max-w-52 text-sm">the video is beautiful.</p>
              </div>
              <Image
                src="/images/ellipse5.jpg"
                alt="ellipse 2"
                width={480}
                height={480}
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>

            <div className="flex items-start gap-2">
              <Image
                src="/images/ellipse3.jpg"
                alt="Michael"
                width={480}
                height={480}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="flex flex-col gap-2">
                <div className="rounded-lg bg-gray-100 p-2">
                  <p className="max-w-52 text-sm">😍😍😍</p>
                </div>
              </div>
            </div>
          </section>
          <section className="absolute bottom-4 ">
            <div className="flex gap-2 px-6">
              <Input
                placeholder="Write your message..."
                className="flex-grow   placeholder-gray-400 "
              />
              <Button>
                <Send size={24} />
              </Button>
            </div>
          </section>
        </PhoneComponent>
      </section>
      <section className="max-w-[450px]">
        <h2 className="text-4xl font-bold leading-tight text-text-primary">
          Share images and videos instantly and effortlessly.
        </h2>
        <p className="my-6 text-lg text-gray-600">
          Capture important moments with the built-in camera. Edit and send them
          quickly, even if the connection is slow.
        </p>
      </section>
    </Wrapper>
  );
}
