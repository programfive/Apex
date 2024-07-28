import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Phone, Send, X } from "lucide-react";

export function Conversation() {
  return (
    <Wrapper className=" my-20 flex gap-60">
      <section className="gap max-w-[25rem]  ">
        <h2 className="text-4xl font-semibold leading-tight text-text-primary">
          Start selling directly inside conversations
        </h2>
        <p className="my-6 text-lg text-gray-600">
          Start selling directly within conversations and experience the
          efficiency and convenience of integrating sales within your chats.
          Join the future of direct sales today.
        </p>
        <Button>Start Chatting Now</Button>
      </section>
      <section className="relative max-w-md flex-1 ">
        <div className=" flex items-center justify-center  ">
          <div className=" w-96 rounded-lg bg-white p-4 shadow-lg">
            <div className="mb-4 space-y-4">
              <div className="flex items-start gap-2">
                <Image
                  src="/images/ellipse9.jpg"
                  alt="Jenny"
                  width={480}
                  height={480}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="rounded-lg bg-gray-100 p-2">
                  <p className="max-w-52 text-sm">
                    Hello! My name is Jenny, how can I help you?
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-end gap-2">
                <div className="bg-orange-500 rounded-lg text-white p-2 ">
                  <p className="max-w-52 text-sm">
                    Hi! Jenny here, I have a few questions I would love to ask
                    you, if that is ok.
                  </p>
                </div>
                <Image
                  src="/images/ellipse10.jpg"
                  alt="Liz "
                  width={480}
                  height={480}
                  className="h-8 w-8 rounded-full object-cover"
                />
              </div>

              <div className="flex items-start gap-2">
                <Image
                  src="/images/ellipse9.jpg"
                  alt="Jenny"
                  width={480}
                  height={480}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col gap-2">
                  <div className="rounded-lg bg-gray-100 p-2">
                    <p className="max-w-52 text-sm">Nice to meet you, Liz!</p>
                  </div>
                  <div className="flex w-20 rounded-lg bg-gray-100 p-2">
                    <p className="text-2xl">...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t pt-2">
              <Input type="text" placeholder="write your reply..." />
              <Button>
                <Send size={24} />
              </Button>
            </div>
          </div>
          <div className="absolute -bottom-36 -left-36 w-56 -translate-y-1/2 transform rounded-lg bg-teal-500 p-4 text-white shadow-lg">
            <h3 className="mb-2 font-bold">
              Will we have daily calls for every project?
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Yes</span>
                <span>65%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-teal-600">
                <div className="h-2 w-2/3 rounded-full bg-white"></div>
              </div>
              <div className="flex justify-between">
                <span>No</span>
                <span>35%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-teal-600">
                <div className="h-2 w-1/3 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-28  top-28 w-48  rounded-lg bg-white p-4 shadow-lg">
          <div className="mb-2 flex flex-col items-center gap-2">
            <Image
              src="/images/ellipse9.jpg"
              alt="Alex Smith"
              width={480}
              height={480}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-bold">Jenny Wilson </p>
              <p className="text-xs text-gray-600">Project Manager</p>
            </div>
          </div>
          <div className="flex justify-center gap-2">
            <button className="pointer-events-none rounded-full bg-green-500 p-2 text-white outline-none">
              <Phone size={24} />
            </button>
            <button className="pointer-events-none rounded-full bg-red-500 p-2 text-white outline-none">
              <X size={24} />
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
